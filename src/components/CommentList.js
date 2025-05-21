// src/components/CommentList.js
'use client';

import { useEffect, useState } from 'react';

function CommentList() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch('/api/comments');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, []);

  if (loading) return <p>Loading comments...</p>;

  return (
    <div className="space-y-4 mt-6">
      <h2 className="text-xl font-semibold">Recent Comments</h2>
      {comments.length === 0 && <p>No comments yet.</p>}
      {comments.map((comment) => (
        <div key={comment.id} className="border p-4 rounded shadow-sm">
          <p className="text-white">{comment.content}</p>
          <p className="text-sm text-red-500 mt-2">
            By {comment.user?.username || 'Anonymous'} on{' '}
            {new Date(comment.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;