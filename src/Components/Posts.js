import Post from "./Post";
import "./Posts.css";
const Posts = () => {
  return (
    <div className="Posts">
      <h1 className="PostTitle">Posts</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
