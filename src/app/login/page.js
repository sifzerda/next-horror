// src/app/login/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // <-- Add this to ensure JSON is parsed properly on server
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('token', data.token); // <-- Store token here
      setMessage('Login successful!');
      router.push('/');
    } else {
      setMessage(data.error || 'Login failed');
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded text-black placeholder-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded text-black placeholder-gray-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {message && (
          <p className="mt-4 text-sm text-red-600">{message}</p>
        )}
      </form>
    </Layout>
  );
}
