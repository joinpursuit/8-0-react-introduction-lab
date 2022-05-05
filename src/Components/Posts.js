import Post from "./Post";


import "./post.css";
const Posts = () => {
  return (
    <>
      <div className="back-post">
      <h3>Posts</h3>  
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};
export default Posts;