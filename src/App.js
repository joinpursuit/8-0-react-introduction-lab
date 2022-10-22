import React from "react";
import "./index.css";

import NavBar from "./Components/NavBar";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";

function App () {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;