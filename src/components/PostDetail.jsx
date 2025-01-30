// src/components/PostDetail.js
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import ReactMarkdown from "react-markdown";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./PostDetail.css"; 

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  // Load post from localStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const foundPost = savedPosts.find((post) => post.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  // Function to delete the post
  const deletePost = () => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = savedPosts.filter((post) => post.id !== parseInt(id));
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate("/"); // Redirect to home after deletion
  };

  if (!post) return <div>Post not found!</div>;

  return (
    <div className="post-detail">
      <div className="post-card">
        <h1>{post.title}</h1>
        <p className="post-date">
          Posted on: {new Date(post.id).toLocaleDateString()}
        </p>
        <div className="post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <div className="post-actions">
          <Link to={`/edit/${post.id}`} className="edit-button">
            Edit Post
          </Link>
          <button onClick={deletePost} className="delete-button">
            Delete Post
          </button>
        </div>
      </div>

      <div className="comments-section">
        <h2>Comments</h2>
        <CommentList postId={post.id} />
        <CommentForm postId={post.id} />
      </div>

      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  );
};

export default PostDetail;