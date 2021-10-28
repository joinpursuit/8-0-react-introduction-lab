import NavBar from "./Components/NavBar.js";
import Contacts from "./Components/Contacts.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import React from "react";
import "./index.css";

const App = () => {
  return (
    <div>
      <p>Hello, world!</p>
      <NavBar />
      <Contacts />
      <UserProfile />
      <Posts />
    </div>
  );
};

export default App;
