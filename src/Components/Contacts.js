import React from "react";
import ContactUserCard from "./ContactUserCard";
import "../styles/Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <div><h3>Contacts</h3></div>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};

export default Contacts;
