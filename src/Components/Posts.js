import Post from "./Post"
import CPosts from "./CPosts.css"

function Posts(){
    return (
        <div id="posts">
            <ul id="titles">
            <p>Posts</p>
            <Post/>
            <Post/>
            <Post/>
            </ul>
        </div>
    )
}

export default Posts