import Post from "./Post";

const Posts = () => {
    const styles = {
        border: '1px solid rgba(0, 0, 0, 0.05)',
        textAlign: 'center',
        padding:30,
        margin:30
   };
    return (
        <div style={styles}>
            <h1>Posts</h1>
            <Post />
            <Post />
            <Post />
        </div>
    )
}
export default Posts