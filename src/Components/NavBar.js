import { Component } from "react";


class NavBar extends Component{
    constructor() {
        super();
    }

    render() {
        return (
            <div className="Nav-bar">
                <button>What is Pursuit?</button>
                <button>Create an account</button>
                <button>Sign in</button>
            </div>
        );
    }
}

export default NavBar;