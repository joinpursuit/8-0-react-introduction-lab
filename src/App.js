import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Post from "./Components/Post.js";
import Contacts from "./Components/Contacts.js";
import ContactUserCard from "./Components/ContactUserCard.js";



const App = () => {
  return (
    <div className="App">
    <NavBar />
    <UserProfile />
    <Posts>
      <Post/>
      <Post/>
      <Post/>
    </Posts>
    <Contacts>
    <ContactUserCard />
    <ContactUserCard />
    <ContactUserCard />
    <ContactUserCard />
    </Contacts>
    </div>
  )
};

export default App;
