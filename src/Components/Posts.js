import { Component } from "react"
import Post from "./Post"

class Posts extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div id = "posts">
                <h2>Posts</h2>
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}


export default Posts