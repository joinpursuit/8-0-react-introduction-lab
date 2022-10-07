import Post from './Post';

function Posts() {
    return (
        <div className='allPosts'>
            <h3>Posts</h3>
            <ul>
                < Post />
                < Post />
                < Post />
            </ul>
        </div>
    );
}

export default Posts;