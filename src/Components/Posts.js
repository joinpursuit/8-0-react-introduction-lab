import Post from "./Post";
import "../ComponentsCss/Posts.css";

const Posts = () => {
  return (
		<div className="Posts">
      <h3>Posts</h3>
			<section>
				<Post />
				<Post />
				<Post />
			</section>
		</div>
	);
}

export default Posts;