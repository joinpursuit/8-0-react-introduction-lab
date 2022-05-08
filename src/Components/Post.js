
const postCard = {
  title: "Title",
  content: "Lorem Ipsem",
};

const Post = () => {
  return (
    <div className="singlePost">
      <h2>{postCard.title}</h2>
      <p>{postCard.content}</p>
    </div>
  );
};

export default Post;
