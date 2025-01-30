// src/components/CommentForm.js
import React, { useState } from "react";

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = savedPosts.map((post) =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;