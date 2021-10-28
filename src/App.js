import NavBar from "./Components/NavBar.js";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts.js";
import UserProfile from "./Components/UserProfile.js";
import React from "react";
import "./index.css";

const App = () => {
  return (
    <div class="app">
      <p>Hello, world!</p>;
      <NavBar />
      <Contacts />
      <Posts />
      <UserProfile />;
    </div>
  );
};

export default App;
