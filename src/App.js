import React from "react";
import "./index.css";
import "./Components/post.css";

import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
// import NavBar from "./Components/NavBar";
// import UserProfile from "./Components/UserProfile";
const App = () => {
  return (
  <div className="container">
    <Posts />
    <Contacts />
  </div>
  )
};

export default App;
