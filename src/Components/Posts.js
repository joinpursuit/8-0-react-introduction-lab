import Post from "./Post";

function Posts() {
    // return <div id="posts-container">Posts</div>
    return (
        <div id="posts-container">
            <h4>Posts</h4>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;