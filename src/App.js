import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts.js";

const App = () => {
  return (
    <div class="appDiv">
      <div>
      <NavBar />
        </div>
      <div class="container">
      <UserProfile />
      <Posts />
      <Contacts />
      </div>
    </div>   
  );
};

export default App;