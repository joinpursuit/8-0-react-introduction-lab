import React from "react";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts.js";
import "./index.css";

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <UserProfile />
      </div>
      <div>
        <Posts />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default App;
