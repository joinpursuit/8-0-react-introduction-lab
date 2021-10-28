function UserProfile() {
	const userStyle = {
		color: "blue",
		border: "solid 1px black",
		textAlign: "center",
		margin: "20px",
		padding: "30",
		width: "auto",
	};
	return (
		<div style={userStyle}>
			<img src="/profile.png" alt="Profile-pic" />
			<h1>Nima Sherpa</h1>
			<div>React creator</div>
		</div>
	);
}

export default UserProfile;
