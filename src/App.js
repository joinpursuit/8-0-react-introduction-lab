import React from "react";
import "./index.css";
import "./App.css"
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

const App = () => {
  return(
    <div>
      <NavBar />
      <div id="container">
        <UserProfile />
        <Posts />
        <Contacts />
      </div>
    </div>
  )
 
};

export default App;
