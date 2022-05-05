import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "../src/Components/Components.css";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
};

export default App;
