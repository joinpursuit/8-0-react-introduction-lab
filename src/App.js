import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard"; 
import Post from "./Components/Post";


const App = () => {
  return (
    <>
    <NavBar/>
    <UserProfile/>
    <Posts/>
    <Post/>
    <Contacts/>
    <ContactUserCard/>
    </>
  );
};
  
export default App;
