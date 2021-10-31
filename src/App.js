import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import Post from "./Components/Post";
import ContactUserCard from "./Components/ContactUserCard";

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
  );
};

export default App;