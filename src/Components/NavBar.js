import React from "react";
const type1 = "What is Pursuit";
const type2 = "Create an account";
const type3 = "Sign In";

const NavBar = () => {
  return (
    <div className="navBar">
      <button>{type1}</button>
      <button>{type2}</button>
      <button>{type3}</button>
    </div>
  );
};

export default NavBar