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