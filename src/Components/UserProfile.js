import { Profiler } from "react/cjs/react.production.min";

function UserProfile() {
	const userStyle = {
		color: "blue",
		border: "solid 1px black",
		textAlign: "center",
		margin: "20px",
		padding: "30",
		width: "50%",
	};
	return (
		<div style={userStyle}>
			<img src="/profile.png" alt="Profile-pic" />
			<h1>Nima sherpa</h1>
			<div>React creator</div>
		</div>
	);
}

export default UserProfile;
