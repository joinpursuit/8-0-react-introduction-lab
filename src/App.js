import React from "react";
import "./index.css";
import Contacts from './Components/Contacts';
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";



const App = () => {
  return (
    <div className="body">
      <NavBar/>
      <UserProfile/>
      <Posts/>
      <Contacts/>
    </div>
  )
};

export default App;
