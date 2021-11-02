import React from "react";
import "./index.css";

import NavBar from "./Components/NavBar";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

const App = ()=>{
  return(
    <div className="shell">
      <NavBar/>
      <UserProfile/>
      <div className="allPosts">
        <Posts/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      <div className="allContacts">
        <Contacts/>
        <ContactUserCard/>
        <ContactUserCard/>
        <ContactUserCard/>
        <ContactUserCard/>
      </div>
    </div>
  )
};

export default App;
