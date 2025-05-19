// src/app/signup.js
'use client';

import { useState } from 'react';
import Layout from '../../components/Layout';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

  try {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const text = await res.text(); // Read response as text
    const data = text ? JSON.parse(text) : {};

    setMessage(data.message || data.error || 'Unknown error');
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="border p-2 rounded text-black"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </Layout>
  );
}

export default Signup;
