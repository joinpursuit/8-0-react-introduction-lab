import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard"
import NavBar from "./Components/NavBar";
import Post from "./Components/Post"
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
      <Posts>
        <Post />
        <Post />
        <Post />
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
