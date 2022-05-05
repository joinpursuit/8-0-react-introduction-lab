import React from "react";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";
import NavBar from "./Components/NavBar";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import "./index.css";

const App = () => {
  return (
    <div>
      Hello, world! <NavBar />
      <UserProfile />
      <Posts>
        <Post />
      </Posts>
      <Contacts>
        <ContactUserCard />
      </Contacts>
    </div>
  );
};

export default App;

// import UserProfile from "NavBar";
// import Posts from "NavBar";
// import Contacts from "NavBar";
// import "./index.css";
