import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import ContactUserCard from "./Components/ContactUserCard";
import Contacts from "./Components/Contacts";

const App = () => {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Posts />
      <Post />
      <Contacts />
      <ContactUserCard />
      <p>Hello, world!</p>
    </>
  );
};

export default App;
