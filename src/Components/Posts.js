import React from 'react';
import Post from './Post.js';
import './Posts.css';

const Posts = () => {
  return (
    <div className='posts'>
      <h3>Posts</h3>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
