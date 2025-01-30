// src/components/PostForm.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import './PostForm.css';

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // Load post data if editing
  useEffect(() => {
    if (id) {
      const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const foundPost = savedPosts.find((post) => post.id === parseInt(id));
      if (foundPost) {
        setTitle(foundPost.title);
        setContent(foundPost.content);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: id ? parseInt(id) : Date.now(), title, content, comments: [] };

    // Save post to localStorage
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    if (id) {
      // Edit existing post
      const updatedPosts = savedPosts.map((post) =>
        post.id === parseInt(id) ? { ...post, title, content } : post
      );
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    } else {
      // Add new post
      localStorage.setItem("posts", JSON.stringify([...savedPosts, newPost]));
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h1>{id ? "Edit Post" : "Create Post"}</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content (Markdown supported)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{id ? "Update" : "Create"}</button>
    </form>
  );
};

export default PostForm;