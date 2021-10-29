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
        <button className="finalbtn">Tres</button>
      </NavBar>
      </header>
      <div className="profile">
      <UserProfile />
      <Contacts>
        <p>Contacts</p>
        <ContactUserCard />
        <p>first contact</p>
        <ContactUserCard />
        <p>second contact</p>
        <ContactUserCard />
        <p>third contact</p>
        <ContactUserCard />
        <p>fourth contact</p>
      </Contacts>
      <Posts>
        <Post>un</Post>
        <Post>deiu</Post>
        <Post>touis</Post>
      </Posts>
      </div>
    </body>
  )
};

export default App;
