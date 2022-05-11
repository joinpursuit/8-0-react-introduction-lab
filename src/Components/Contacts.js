import ContactUserCard from "./ContactUserCard";
import "../ComponentsCss/Contacts.css";

const Contacts = () => {
  return (
		<div className="Contacts">
			<h3>Contacts</h3>
			<section className="user-cards">
				<ContactUserCard />
				<ContactUserCard />
				<ContactUserCard />
				<ContactUserCard />
			</section>
		</div>
	);
}

export default Contacts;