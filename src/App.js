import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <UserProfile />
      <div className="allPosts">
        <Posts />
      </div >
      <div className="allContacts">
        <Contacts />
      </div>
    </div>
  );
};

export default App;
