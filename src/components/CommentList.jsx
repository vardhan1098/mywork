// src/components/CommentList.js
import React, { useState, useEffect } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  // Load comments from localStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const foundPost = savedPosts.find((post) => post.id === postId);
    if (foundPost) setComments(foundPost.comments);
  }, [postId]);

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;