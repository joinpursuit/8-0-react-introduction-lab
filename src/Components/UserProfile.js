function UserProfile() {
	const userStyle = {
		border: "solid 1px black",
		textAlign: "center",
		margin: "20px",
		padding: "30",
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
