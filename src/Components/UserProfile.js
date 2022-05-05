// import React from "react";
const user = {
paper1: "Jordan Walke",
paper2: "React Creator",
paper3: "Lorem ipsum"
}


const UserProfile = () => {
  return (
    <div className="adieu">
      <h3>{user.paper1}</h3>
      <h4>{user.paper2}</h4>
      <p>{user.paper3}</p>
    </div>
  );
};
export default UserProfile;