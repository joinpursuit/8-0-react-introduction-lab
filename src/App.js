import React from "react";
import "./index.css";
import "./Components/feed.css"
import Contact from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

const App = () => {
  return (
    <div className="container">
      <NavBar/>
      <UserProfile />
      <Posts />
      <Contact />
    </div>
  );
};

export default App;
