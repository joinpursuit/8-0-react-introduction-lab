import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";

const App = () => {
  return (
    <div>
      <h2><NavBar/></h2>
      <h2><UserProfile /></h2>
      <h2><Posts /></h2>
      <h2><Contacts /></h2>
    </div>
  )
};

export default App;
