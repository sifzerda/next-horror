// src/components/CommentForm.js
'use client';

import { useState, useEffect } from 'react';

function decodeJWT(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );
    return JSON.parse(payload);
  } catch (err) {
    console.error('❌ Failed to decode JWT:', err);
    return null;
  }
}

function CommentForm() {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.warn("⚠️ No token found in localStorage.");
      setUser(null);
      return;
    }

    // Optionally, decode the token client-side to get user info
    const decoded = decodeJWT(token);
    if (decoded) {
      console.log("✅ Decoded JWT:", decoded);
      setUser({ id: decoded.userId, email: decoded.email }); // assuming your JWT has `userId`
    } else {
      console.error("❌ Invalid JWT.");
      setUser(null);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!user) {
      setMessage('You must be logged in to comment.');
      return;
    }

    const token = localStorage.getItem('token');

    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,  // send JWT in Authorization header
      },
      body: JSON.stringify({ content }),
    });

    if (res.ok) {
      setMessage('✅ Comment submitted!');
      setContent('');
      // Refresh the page automatically:
      window.location.reload();
    } else {
      const data = await res.json();
      setMessage(data.error || '❌ Submission failed');
    }
  };

  if (!user) {
    return (
      <div className="bg-minty text-black px-4 py-2 rounded">
        <p>Please log in to leave a comment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        className="w-full border border-gray-300 p-2 rounded text-black"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment..."
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}

export default CommentForm;