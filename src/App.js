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
    <body className="App">
      <header>
        <NavBar>
          <button>What is Pursuit?</button>
          <button>Create an account</button>
          <button className="endbutton">Sign in</button>
        </NavBar>
      </header>
      <div className="page">
        <UserProfile>UserProfile</UserProfile>
        <Contacts>
          <p>Contacts</p>
          <ContactUserCard>
            <img src="profile.png" />
            <p>Contact1</p>
          </ContactUserCard>
          <ContactUserCard>
            <img src="profile.png" />
            <p>Contact2</p>
          </ContactUserCard>
          <ContactUserCard>
            <img src="profile.png" />
            <p>Contact3</p>
          </ContactUserCard>
          <ContactUserCard>
            <img src="profile.png" />
            <p>Contact4</p>
          </ContactUserCard>
        </Contacts>
        <Posts>
          <p>Posts</p>
          <Post>Post1</Post>
          <Post>Post2</Post>
          <Post>Post3</Post>
        </Posts>
      </div>
    </body>
  );
};

export default App;
