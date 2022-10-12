

import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";

import Posts from "./Components/Posts";

const App = () => {
  return (<div>
 <NavBar/>
 <Contacts/>
 <UserProfile/>
 <Posts/>
  </div>
   )
  
};

export default App;
