function Post() {
  let post = [];

  for (let i = 0; i < 3; i++) {
    post[i] = <p> post {i}</p>;
  }

  return post;
}

export default Post;
