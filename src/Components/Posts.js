import Post from "./Post";
import styles from "./Posts.module.css"

const Posts = () => {

    return (
        <section className= {styles.Posts}>
            <h2>Posts</h2>
            <Post />
            <Post />
            <Post />
        </section>

    )
}

export default Posts