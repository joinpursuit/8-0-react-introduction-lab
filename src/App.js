import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";

const App = () => {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
    </div>   
  );
};

export default App;