function ContactUserCard() {
	const contactStyle = {
		display: "flex",
		color: "blue",
	};
	return (
		<div style={contactStyle}>
			<img src="/profile.png" alt="Profile-pic" />
			<div>
				<h1>Nima sherpa</h1>
				<div>React creator</div>
				<p> hey Again </p>
			</div>
		</div>
	);
}

export default ContactUserCard;
