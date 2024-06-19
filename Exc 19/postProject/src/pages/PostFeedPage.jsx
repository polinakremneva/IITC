import React from 'react';
import PostList from '../components/PostList';
import useAxios from '../hooks/useAxios';

const PostFeedPage = () => {
  const DUMMYDATA_URL = "http://localhost:8001/posts"; 

  const { data: posts, error, loading } = useAxios(DUMMYDATA_URL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error while fetching posts: {error.message}</p>;

  return (
    <div>
      <h1>List of Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default PostFeedPage;
