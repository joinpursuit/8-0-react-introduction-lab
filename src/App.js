import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./App.css";



const App = () => {
  return (
    <>
      <h2>App</h2>

      <ul className="gridBox">
        <NavBar />
        <UserProfile />
        <Posts />
        <Contacts />
      </ul>
    </>
  )

};

export default App;
