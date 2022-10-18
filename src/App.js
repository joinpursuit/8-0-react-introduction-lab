import React from "react";
import "./index.css";
import Contacts from './Components/Contacts'
import NavBar from './Components/NavBar'
import Post from './Components/Post'
import UserProfile from './Components/UserProfile'

const App = () => {
  return (
    <div>
      <UserProfile/>
      <NavBar/> 
      <Post/>
      <Contacts/>
    </div>
  )
};

export default App;
