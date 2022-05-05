import React from "react";
import NavBar from "./Components/NavBar.js"
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js"
import Post from "./Components/Post.js"
import ContactUserCard from "./Components/ContactUserCard.js";
import Contacts from "./Components/Contacts.js";
import "./index.css";

const App = () => {

  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Post />
      <ContactUserCard />
      <Contacts />
    </div>
     
   )
      
};

export default App;
