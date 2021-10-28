function Post() {
	const divStyle = {
		color: "blue",
		border: "solid 1px black",
		textAlign: "center",
		margin: "20px",
		padding: "30",
		width: "auto",
	};
	return (
		<div style={divStyle}>
			<h2>Title</h2>
			<p>Hey There !</p>
		</div>
	);
}

export default Post;
