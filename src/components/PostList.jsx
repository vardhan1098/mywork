// src/components/PostList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            margin:"10px",
            padding: "10px",
            cursor:"pointer",
            width:"80%",
          }}
        >
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p style={{ fontSize: "15px", fontWeight: "bold", color: "gray" }}>
            {post.content.substring(0, 100)}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
