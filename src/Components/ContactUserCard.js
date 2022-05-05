import React from "react";
import "./Components.css";

const ContactUserCard = () => {
  return (
    <div className="contactUserCard">
      <img src="./profile.png" alt="profile.png" />
      <p className="name">Jordan Walke</p>
      <p className="jobTitle">React Creator</p>
      <p className="loremIpsem">Lorem Ipsem</p>
    </div>
  );
};

export default ContactUserCard;
