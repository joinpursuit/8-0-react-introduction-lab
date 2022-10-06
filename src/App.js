
import React from "react";
import  NavBar  from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";
import './App.css'


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
      <Contacts />
      <Posts />
    </div>
  
  )
};

export default App;
