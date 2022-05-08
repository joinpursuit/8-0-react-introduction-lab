import React from "react";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts.js";
import "./index.css";

const App = () => {
  return (
    <>
    <header id="header">
      <NavBar />
    </header>
    <div id="userpfp">
      <UserProfile />
    </div>
    <main>
    <div id="posts">
      <Posts />
    </div>
    <div id="contacts">
      <Contacts/>
    </div>
    </main>
    </>

  )

};

export default App;
