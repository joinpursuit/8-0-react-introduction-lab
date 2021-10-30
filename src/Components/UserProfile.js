import React from "react";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-pic">
        <img src={process.env.PUBLIC_URL + "/profile.png"} alt="profilePic" />
      </div>
      <div className="user-info">
        <h3>Jordan Walke</h3>
        <h4>React Creator</h4>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  );
};
export default UserProfile;
