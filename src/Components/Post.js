const multiplePost = {
    title: "Title",
    desecription: "Lorem Ipsem"
}
const Post = () => {
    return (
        <div className='post'>
            {multiplePost.title}
            {multiplePost.desecription}

        </div>
    )
}
export default Post