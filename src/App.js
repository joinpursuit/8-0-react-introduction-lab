import React from "react";
import "./index.css";
import NavBar from './Components/NavBar/index'
import UserProfile from './Components/UserProfile/index'
import Posts from './Components/Posts/index'
import Contacts from "./Components/Contacts/index";

function App () {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  )

};

export default App;
