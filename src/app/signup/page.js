// src/app/signup/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (res.ok) {
        // Store JWT in localStorage
        if (data.token) {
          localStorage.setItem('token', data.token);
        }

        // Redirect user
        router.push('/');
      } else {
        setMessage(data.message || data.error || 'Signup failed.');
      }
    } catch (err) {
      setMessage('Signup failed. Please try again.');
      console.error('Signup error:', err);
    }
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border p-2 rounded text-black placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border p-2 rounded text-black placeholder-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="border p-2 rounded text-black placeholder-gray-400"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </Layout>
  );
}

export default Signup;
