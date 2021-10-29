function ContactUserCard() {
	const contactStyle = {
		display: "flex",
		border: "1px solid black",
		padding: "20px",
		backgroundColor: "grey",
	};
	const containerStyle = {
		border: "1px solid black",
		padding: "20px",
	};
	return (
		<div style={containerStyle}>
			<div style={contactStyle}>
				<img src="/profile.png" alt="Profile-pic" />
				<div>
					<h1>Nima sherpa</h1>
					<div>React creator</div>
					<p> Hey Again </p>
				</div>
			</div>
		</div>
	);
}

export default ContactUserCard;
