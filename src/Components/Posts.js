import react from 'react';
import Post from './Post';
import './Feed.css'

const Posts = () => {
    return (
        <div className='feed'>
            <h3>Posts</h3>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;
