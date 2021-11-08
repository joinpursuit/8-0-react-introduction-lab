import React from "react";
import "./index.css";

import NavBar from "./Components/NavBar";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

const App = ()=>{
  return(
    <div className="shell">
      <NavBar/>
      <UserProfile/>
      <div className="allPosts">
        <Posts/>
      </div>
      <div className="allContacts">
        <Contacts/>
      </div>
    </div>
  )
};

export default App;
