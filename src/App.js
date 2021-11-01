import React from "react";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";
import "./index.css";

const App = () => {
  return (
    <div id="main">
      <NavBar/>
      <UserProfile />
      <Posts />
        {/* <Post />
        <Post />
        <Post />
        <Post /> */}
      <Contacts />
        {/* <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard /> */}
    </div>
  );

};

export default App;
