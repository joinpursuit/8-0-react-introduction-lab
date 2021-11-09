import React from "react";

import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

import "./index.css";

const App = () => {
  return (
    <div >
      <div><NavBar /></div>
      <div><UserProfile /></div>
      <div><Posts /></div>
      <div><Contacts /></div>
    </div>
  )
};

export default App;
