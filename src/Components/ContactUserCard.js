import React from "react";

const ContactUserCard = () => {
  return (
    <div className="contact-card">
      <div className="contact-pic">
        <img src={process.env.PUBLIC_URL + "/profile.png"} alt="profilePic" />
      </div>
      <div className="contact-info">
        <h3>Jordan Walke</h3>
        <h4>React Creator</h4>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  );
};

export default ContactUserCard;
