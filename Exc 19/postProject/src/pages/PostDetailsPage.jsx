import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';

const PostDetailsPage = () => {
  const { postId } = useParams();
  const POST_DETAILS_URL = `http://localhost:8001/posts/${postId}`;

  const { data: post, error, loading } = useAxios(POST_DETAILS_URL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error while fetching post details: {error.message}</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
      <p>Likes: {post.reactions?.likes || 0}</p>
      <p>Comments: {post.comments?.length || 0}</p>
      <p>Created At: {post.createdAt}</p>
      <p>Updated At: {post.updatedAt}</p>
    </div>
  );
};

export default PostDetailsPage;
