import { Component } from "react";
import Post from "./Post";


class Posts extends Component{
    constructor() {
        super()
    }

    render (){
        return (
            <div className="Posts">
                <div>{Post}</div>
                <div>{Post}</div>
                <div>{Post}</div>
            </div>
        )
    }
}