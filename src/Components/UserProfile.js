import React from "react";
import "./Components.css";

const UserProfile = () => {
  return (
    <div className="userProfile">
      <img src="./profile.png" alt="profile.png" />
      <p className="name">Jordan Walke</p>
      <p className="jobTitle">React Creator</p>
      <p className="loremIpsem">Lorem Ipsem</p>
    </div>
  );
};

export default UserProfile;
