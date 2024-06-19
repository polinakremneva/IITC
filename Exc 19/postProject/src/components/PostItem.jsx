import React from "react";
import { Link } from "react-router-dom";

function PostItem({ post }) {
  return (
    <div>
      <h2>User ID: {post.userId}</h2>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <p>Likes: {post.reactions?.likes}</p>
      <p>Comments: {post.comments?.length || 0}</p>
      <Link to={`/postPage/${post.id}`}>See More</Link>
    </div>
  );
}

export default PostItem;
