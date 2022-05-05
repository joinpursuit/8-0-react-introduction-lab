const Post = () => {
  const posts = [
    { title: 'Title', info: 'Loren Ipsem' },
    { title: 'Title', info: 'Loren Ipsem' },
    { title: 'Title', info: 'Loren Ipsem' },
  ];
  return posts.map((post) => <p>{post.title}</p>);
};
export default Post;
