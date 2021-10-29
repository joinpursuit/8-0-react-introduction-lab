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
      <NavBar />
      <UserProfile />;
      <div>
        Post
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
