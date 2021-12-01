import React from "react";
import "./index.css";
import Navbar from "./Components/NavBar.js"
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

const App = () => {
  return (
    <div>
    <Navbar />
    <UserProfile />
    <Posts />
    <Contacts />
    </div>
  )
};

export default App;
