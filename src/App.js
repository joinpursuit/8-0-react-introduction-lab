import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";
import "./index.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Post />
      <Posts />
      <Contacts />
      <ContactUserCard />
    </div>
  );
};

export default App;
