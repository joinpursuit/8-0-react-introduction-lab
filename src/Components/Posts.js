import React from "react";
import "./Posts.css";
import Post from "./Post";

const Posts = () => {
    return (
        <section className="Posts">
            <h2>Posts</h2>
            <Post title="First Post" description="Lorem Ipsem"/>
            <Post title="Second Post" description="Lorem Ipsem"/>
            <Post title="Third Title" description="Lorem Ipsem"/>
        </section>
    );
};

export default Posts