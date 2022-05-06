import React from "react";
import Post from './Post';

const Posts = () => {
    return <section className="posts">
        <h2>Posts</h2>
        {/* {Post.map((item) => (
        <li>{item}</li>
        ))} */}
        <Post />
    </section>;
};

export default Posts;