import React from "react";

class NavBar extends React.Component {
    render(){
        return (
            <form className="navbar">
                <button type="submit">What is Pursuit?</button>
                <button type="submit">Create an Account</button>
                <button type="submit">Sign In</button>
            </form>
        )
    }
}

export default NavBar;