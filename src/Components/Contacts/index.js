import React from "react";
import "./index.css";
import ContactUserCard from "../ContactUserCard/index";

const Contacts = () => {
  return (
    <div id="Contacts">
      <h2>Contacts</h2>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};
export default Contacts;
