import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <UserProfile />
      <div className="allPosts">
        <Posts />
        <Post />
        <Post />
        <Post />
      </div >
      <div className="allContacts">
        <Contacts />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
    </div>
  );
};

export default App;
