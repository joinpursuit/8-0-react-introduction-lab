import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Post from "./Components/Post";

function App() {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Post />
      <Post />
      <Post />
      <Contacts />
    </div>
  );
}

export default App;
