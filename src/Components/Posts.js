import React from "react";
import Post from "./Post";


class Posts extends React.Component{
    constructor() {
        super()
    }

    render (){
        return (
            <div className="Posts">
                <h2>Posts</h2>
                <div><Post /></div>
                <div><Post /></div>
                <div><Post /></div>
            </div>
        )
    }
}

export default Posts;