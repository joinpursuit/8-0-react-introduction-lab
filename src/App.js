import NavBar from "./Components/NavBar.js";
import Contacts from "./Components/Contacts.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <UserProfile />
      <div>
        post
        <Posts />
        <Posts />
        <Posts />
      </div>
      <div>
        Contacts
        <Contacts />
        <Contacts />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
