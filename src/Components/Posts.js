const { Component } = require("react");
import Post from "./Post";


class Posts extends Component{
    constructor(){
        super()
    };

    render(){
        return(
           <div className="posts">
               <h4>Title</h4>
               <Post />
               <Post />
               <Post />
           </div>
           
           

        )
    }

};

export default Posts;