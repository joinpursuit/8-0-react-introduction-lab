import React from "react";
import "./index.css";
import NavBar from "./NavBar";
import UserProfile from "./UserProfile";
import Posts from "./Posts";
import Contacts from "./Contacts";


const App = () => {
  return (
    <div id="app">
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
    );
};

export default App;
