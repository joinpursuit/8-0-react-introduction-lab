import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";

const App = () => {
  return (
    <div>
      <NavBar />
      <div id="app-container">
        <UserProfile />
        <Contacts />
        <Posts />
      </div>
    </div>
  );
};

export default App;
