import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";

function App () {
  return( 
    <html>
  <NavBar/>
  <body>
    <UserProfile/>
    <Posts/>
    <Contacts/>
  </body>
  </html>
  );
};

export default App;
