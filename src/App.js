import React from "react";
import "./index.css";
import Posts from "./Components/Post";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";


const App = () => {
  return (
    <div>
      <NavBar/>
      <div className="app-container">
        <UserProfile />
        <Contacts />
        <Posts />
      </div>
    </div>
  );
};

export default App;
