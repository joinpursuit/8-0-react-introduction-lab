import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard"
import NavBar from "./Components/NavBar";
import Post from "./Components/Post"
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

const App = () => {
  return (
    <body className="App">
      <header>
      <NavBar>
        <button>Uno</button>
        <button>Dos</button>
        <button>Tres</button>
      </NavBar>
      </header>
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
    </body>
  )
};

export default App;
