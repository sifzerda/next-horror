import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { getUserFromRequest } from '../../../../lib/serverAuth';

export async function POST(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user || !user.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { content } = await req.json();
    if (!content) {
      return NextResponse.json({ error: 'Missing comment content' }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        userId: user.sub,
      },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const comments = await prisma.comment.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}