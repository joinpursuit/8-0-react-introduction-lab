import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile"
import Post from "./components/Post"
import Posts from "./components/Posts"
import Contacts from "./components/Contacts"
import ContactUserCard from "./components/ContactUserCard"

const App = () => {
  return (
    <>
    <main>

  <NavBar />
 
  </main>
  <div className="container">
  <UserProfile />
  <Posts/>
 
  <Contacts/>
  <ContactUserCard/>
  <ContactUserCard/>
  <ContactUserCard/>
 </div>
 </>
  );
};

export default App;
