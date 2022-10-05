import React from "react";

const Post = () =>{
    const PostData = {
        title: 'Title',
        text: 'Lorem Ipsum'
    }
    return (
        <div className="Post">
            <h3 className="title">{PostData.title}</h3>
            <p className="text">{PostData.text}</p>
        </div>
    )
}

export default Post