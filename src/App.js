import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="nav">
        <NavBar />
      </div>
      <div className="userProfile">
        <UserProfile />
      </div>
      <div className="pos">
        <Posts />
      </div>
      <div className="Con">
        <Contacts />
      </div>
    </div>
  );
};

export default App;
