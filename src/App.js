import React from "react";
import "./index.css";
import NavBar from "./components/NavBar.js";
import UserProfile from "./components/UserProfile.js";
import Post from "./components/Post.js"
import Contacts from "./components/Contacts.js"

const App = () => {
  return (
    <>
  <p>Hello, world!</p>
  <NavBar />
  <UserProfile /> 
  <Post />
  <Post />
  <Post />
  <Contacts /> 
 
  
  </>
  )



};

export default App;
