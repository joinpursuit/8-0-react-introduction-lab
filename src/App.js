import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Posts />
      <Contacts />
      <UserProfile />
    </div>
  ); 
};

export default App;
