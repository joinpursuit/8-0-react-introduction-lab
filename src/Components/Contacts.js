import react from "react";
import ContactUserCard from "./ContactUserCard";
import "./Feed.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};

export default Contacts;
