import Post from "./Post";
import "./Posts.css";

export default function Posts() {
  return (
    <div className="ps">
      <h4>Posts</h4>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
