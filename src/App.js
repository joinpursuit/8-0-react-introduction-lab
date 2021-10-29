import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar"
import Posts from "./Components/Posts"
import UserProfile from "./Components/UserProfile"



const App = () => {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Contacts />
      <Posts />
    </div>
  );
};

export default App;
