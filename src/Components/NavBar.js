import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="NavBar">
            <h1>Home</h1>
            <button className="pursuit">What is Pursuit</button>
            <button id="account">Create an account</button>
            <button id="sign">Sign In</button>
        </div>
    )
};

export default NavBar;