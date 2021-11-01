import { Component } from "react";

class NavBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="nav-container">
        <button>What is Pursuit?</button>
        <button>Create an Account</button>
        <button>Sign in</button>
      </div>
    );
  }
}

export default NavBar;
