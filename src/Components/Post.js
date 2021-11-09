import React from "react";
import Post from "./Post";


class Posts extends React.Component { 
constructor(){
  super()
}

render() {
  return <div className="posts">
      Posts
      <Post/>
      <Post/>
      <Post/>
    </div>
}
};

export default Posts;