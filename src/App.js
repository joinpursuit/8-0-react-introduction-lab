import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";

const App = () => {
  return (
    <p>
      Hello, world!
      <NavBar />
      <UserProfile />
      <Post />
      <Post />
      <Post />
      <Posts />
      <Contacts />
    </p>
  );
};

export default App;
