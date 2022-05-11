/** @format */
import "../ComponentsCss/ContactUserCard.css";

const user = {
	profilePic: 'profile.png',
	name: 'Michael Kleemoff',
	title: 'React Developer',
	hobby: 'Acrylic Painting',
};

const ContactUserCard = () => {
	return (
		<div className="ContactUserCard">
			<img src={user.profilePic} alt="profile" className="contact-pic" />
			<section className="contact-style">
				<h2>{user.name}</h2>
				<h3>{user.title}</h3>
				<p>{user.hobby}</p>
			</section>
		</div>
	);
};

export default ContactUserCard;
