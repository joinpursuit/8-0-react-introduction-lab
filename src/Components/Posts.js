import React from 'react';
import Post from './Post';
import './Posts.css';

class Posts extends React.Component {
  constructor() {
    super();
  }
  render() {
    let samplePost = [
      { title: 'test1', content: 'test2' },
      { title: 'test1', content: 'test2' },
      { title: 'test1', content: 'test2' },
    ];
    return (
      <div className="Posts">
        <h2>Posts</h2>
        {samplePost.map((item) => (
          <Post />
        ))}
      </div>
    );
  }
}

export default Posts;
