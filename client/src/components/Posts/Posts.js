import React from "react";
import Post from "./Post/Post";

import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      {posts.map((post, index) => (
        <h1 key={index}>{post.title}</h1>
      ))}
      <Post />
    </div>
  );
}

export default Posts;
