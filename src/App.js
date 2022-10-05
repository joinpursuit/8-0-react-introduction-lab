import React from "react";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="mainContainer">
        <div className="profile">
          <UserProfile />
          <Posts />
        </div>
        <aside>
          <Contacts />
        </aside>
      </div>
    </div>
  );
};

export default App;
