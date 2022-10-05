import "./Contacts.css";

import ContactUserCard from "./ContactUserCard";

const Contacts = () => {
  return (
    <div>
      <h3 id="contactsTitles">Contacts</h3>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};

export default Contacts;
