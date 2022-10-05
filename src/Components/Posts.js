import Post from './Post';
import './Posts.css';

const Posts = () => {
  return (
    <div className="posts">
      <h1 className="title">Posts</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
