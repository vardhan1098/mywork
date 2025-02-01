import React, { useEffect, useState } from "react";
import PostData from "./PostData";

const PostsLists = () => {
  const [post, setPost] = useState({
    title: "",
    category: "",
    content: "",
  });
  const { title, category, content } = post;

  const [postList, setPostList] = useState(() => {

    const savedPosts = localStorage.getItem("sasi");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!title || !content || !category) {
      return alert("please fill all the fields..");
    }
    let newPost = {
      id: crypto.randomUUID(),
      title: post.title,
      category: post.category,
      content: post.content,
    };

    setPostList((prevPost) => {
      const updatedList = [...prevPost, newPost];
      localStorage.setItem("sasi", JSON.stringify(updatedList));
      return updatedList;
    });
    setPost({ title: "", category: "", content: "" });
  };

  return (
    <div>
      <form onSubmit={handlePost}>
        <h3>Post a Blog</h3>
        <input
          type="text"
          value={title}
          name="title"
          onChange={handleChange}
          placeholder="Enter a Title.."
        />
        <input
          type="text"
          value={category}
          name="category"
          placeholder="Enter a Category.."
          onChange={handleChange}
        />
        <textarea
          placeholder="Enter a Post..."
          value={content}
          name="content"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <>
        <PostData postList={postList} />
      </>
    </div>
  );
};

export default PostsLists;
