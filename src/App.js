import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
// import './Components/Feed.css'
import "./index.css";


const App = () => {
  return (
    <div className='container'>
      <NavBar/>
      <UserProfile/>
      <Posts/>
      <Contacts/>
    </div>
  )
};

export default App;
