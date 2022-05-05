import React from "react";
import "./index.css";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";

const App = () => {
  return (
    <div>
      <main>
        <NavBar />
        <UserProfile />
        <Posts />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
