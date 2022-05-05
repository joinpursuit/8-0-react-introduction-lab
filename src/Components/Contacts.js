import React from "react";
import ContactUserCard from "./ContactUserCard";

const Contacts = () => {
  return (
    <div className="contact">
      <h3>Contacts</h3>
      <ContactUserCard/>
      <ContactUserCard/>
      <ContactUserCard/>
    </div>
  );
};
export default Contacts;