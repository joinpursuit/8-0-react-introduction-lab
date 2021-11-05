import React from "react";
import "./index.css";
import  NavBar from './Components/NavBar.js';
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts";
import "./index.css";

const App = () => {
  return ( 
    <section id="container">

      <div className="box">
        <NavBar className="navigation"/>
      </div>

      <div className="UserProfile">
        <UserProfile className="profile"/>
      </div>

      <div className="posts">
        <Posts className="posts"/> 
      </div>

      <div className="contacts">
        <Contacts className="contacts"/>
      </div>

    </section>
  )
};

export default App;
