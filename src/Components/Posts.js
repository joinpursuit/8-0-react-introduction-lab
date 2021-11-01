import { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="posts-container">
        <div id="posts">
          <strong>Posts</strong>
        </div>
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default Posts;
