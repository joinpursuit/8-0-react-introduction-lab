import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
const App = () => {
  return (
    <div className="App-div">
      <div>
        <NavBar />{" "}
      </div>
      <div className="grid">
        <UserProfile />
        <Posts />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
