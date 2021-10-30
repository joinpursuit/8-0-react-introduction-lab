import Post from "./Post.js"

function Posts () {
    return (
        <div className="posts">
            <p>Posts</p>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;