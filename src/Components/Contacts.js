import ContactUserCard from "./ContactUserCard";
import "./Contacts.css";

const Contacts = () => {
  return (
    <aside className="contactsContainer">
      <h2>Contacts</h2>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </aside>
  );
};

export default Contacts;
