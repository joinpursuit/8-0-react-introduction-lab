import React from "react";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div className="App-Container">
      <div className="Nav">
        <NavBar/> 
      </div>
      <div className="Profile">
        <UserProfile/>
      </div>
      <div className="Posts">
        <Posts/>
      </div>
      <div className="Contacts">
        <Contacts/>
      </div>
    </div>
  );
};

export default App;
