// src/components/CommentForm.js
'use client';

import { useState } from 'react';

function CommentForm({ userId }) {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

const res = await fetch('/api/comments', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ content }), // no userId here
});

    if (res.ok) {
      setMessage('Comment submitted!');
      setContent('');
    } else {
      const data = await res.json();
      setMessage(data.error || 'Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        className="w-full border border-gray-300 p-2 rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment..."
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}

export default CommentForm;