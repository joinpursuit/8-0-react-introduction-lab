import react from "react";
import Post from "./Post";

const Posts = () => {
    return (
        <div className="allPosts">
            <strong>
                <Post />
                <Post />
                <Post />
            </strong>
        </div>
    );
};

export default Posts;