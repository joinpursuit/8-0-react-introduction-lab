import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <button type="submit">What is Pursuit?</button>
      <button type="submit">Create an Account</button>
      <button type="submit">Sign In</button>
    </div>
  );
};

export default NavBar;
