import "./index.css";

import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";


const App = () => {
  return (
    <div>
       <NavBar />
       <div className="main">
       <UserProfile />
       <Posts />
       <Contacts />
       </div>
      
    </div>
    );
};

export default App;
