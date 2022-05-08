const Post = () => {
    const PostObj = {
        title: "Title",
        description: "Lorem Ipsem",
    }

    return (
        <div>
            <p>{PostObj.title}</p>
            <p>{PostObj.description}</p>
        </div>
    );
};

export default Post;