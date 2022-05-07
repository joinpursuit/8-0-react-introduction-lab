import react from 'react';
import './Feed.css'

const Post = () => {
    
    const postData = {
        title: 'Title',
        text: 'Lorem Ipsum'
    }

    return (
        <div className='post'>
            <p className='title'>{postData.title}</p>
            <p className='text'>{postData.text}</p>
        </div>
    )
}

export default Post;