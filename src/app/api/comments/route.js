import { prisma } from '../../../../lib/prisma'; 
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from '../auth/[...nextauth]/route'; 

export async function POST(req) {
   try {
    // Get the current logged-in user session
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { content } = await req.json();

    if (!content) {
      return NextResponse.json({ error: 'Missing comment content' }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        userId: session.user.id, // use user ID from session only!
      },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const comments = await prisma.comment.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}