import NavBar from "./Components/NavBar.js";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts.js";
import UserProfile from "./Components/UserProfile.js";
import React from "react";
import "./index.css";

const App = () => {
  //return jsx
  return (
    <div className="app">
      <NavBar className="NavBar" />
      <UserProfile className="Userprofile" />;
      <div className="Posts">
        Post
        <Posts />
        <Posts />
        <Posts />
      </div>
      <div className="Contacts">
        Contacts
        <Contacts />
        <Contacts />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
