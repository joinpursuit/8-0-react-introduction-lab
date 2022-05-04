import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts.js";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

const App = () => {
  return (
    <>
      <div>
        <Contacts />
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <Posts />
      </div>
      <div>
        <UserProfile />
      </div>
    </>
  );
};

export default App;
