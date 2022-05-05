// import React from "react"
const text1 = "What is Pursuit";
const text2 = "Create an Account";
const text3 = "Sign In"

const NavBar = () => {
    return (
        <div className="NavBar">
            <button>{text1}</button>
            <button>{text2}</button>
            <button>{text3}</button>
        </div>
    )
}

export default NavBar;