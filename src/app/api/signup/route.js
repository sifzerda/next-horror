import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';
import { signJWT } from '@/lib/auth';

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return jsonResponse({ error: 'Email and password are required' }, 400);
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return jsonResponse({ error: 'Invalid email format' }, 400);
    }

    if (password.length < 8) {
      return jsonResponse({ error: 'Password must be at least 8 characters' }, 400);
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return jsonResponse({ error: 'User already exists' }, 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Automatically sign a token after successful signup
    const token = await signJWT({ sub: user.id, email: user.email });

    return jsonResponse({ message: 'User created successfully', token }, 201);
  } catch (error) {
    console.error('Signup error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}
