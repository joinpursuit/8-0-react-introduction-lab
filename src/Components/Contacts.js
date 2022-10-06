import ContactUserCard from "./ContactUserCard";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contactsContainer">
      <h2>Contacts</h2>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};

export default Contacts;
