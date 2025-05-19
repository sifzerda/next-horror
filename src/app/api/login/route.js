import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const users = {}; // This must be the same users object or DB

const JWT_SECRET = 'your_jwt_secret_here'; // Use env var in prod

export async function POST(req) {
  const { email, password } = await req.json();

  const user = users[email];
  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

  return new Response(JSON.stringify({ token }), { status: 200 });
}
