import React from "react";
import "./index.css"
import ContactUserCard from"./Components/ContactUserCard"
import Contacts from "./Components/Contacts"
import NavBar from"./Components/NavBar"
import Post from "./Components/Post"
import Posts from"./Components/Posts"
import UserProfile from "./Components/UserProfile"

const App = () => {
  return (
    <div>
      <NavBar/>
      <UserProfile/>
      <Contacts/>
      <Post/>
      <Posts/>
      <ContactUserCard/>
    </div>
  );
};

export default App;
