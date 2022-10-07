import React from "react";

import ContactUserCard from "./ContactUserCard";

const Contacts = () => {
  return (
    <div className="contacts" style={{ textAlign: "center" }}>
      <h2>Contacts</h2>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};

export default Contacts;
