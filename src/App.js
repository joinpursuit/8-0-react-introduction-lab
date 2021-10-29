import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";

const App = () => {
  return (
    <div>
      <NavBar />
      <UserProfile />
    </div>   
  );
};

export default App;