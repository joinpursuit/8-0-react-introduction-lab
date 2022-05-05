const PostObj = {
    title: "Title",
    description: "Lorem Ipsem",
}
const Post = () => {
    return (
        <div>
            {PostObj.title}
            {PostObj.description}
        </div>
    )
}
export default Post