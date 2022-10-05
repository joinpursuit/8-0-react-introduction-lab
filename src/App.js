
import React from "react";
import  NavBar  from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";
import "./index.css";
import "./NavBar.css";


const App = () => {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Post />
      <Post />
      <Post />
      <Contacts />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  
  )
};

export default App;
