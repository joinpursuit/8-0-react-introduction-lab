import { Post } from "./Post";
const Posts = () => {
  return (
    <div class="posts">
      <h3>Posts</h3>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
    
  );
};

export {Posts};