import React from 'react';

class Post extends React.Component {
  constructor() {
    super();
    this.title = 'test 1';
    this.content = 'test 2';
  }
  render() {
    return (
      <div>
        <h2>{this.title}</h2>
        <p>{this.content}</p>
      </div>
    );
  }
}

export default Post;
