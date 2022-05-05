import './Feed.css'

const Post = () => {
    
    const postData = {
        title: 'Title',
        text: 'Lorem Ipsum'
    }

    return (
        <div className='post'>
            <h3>{postData.title}</h3>
            <p>{postData.text}</p>
        </div>
    )
}

export default Post;