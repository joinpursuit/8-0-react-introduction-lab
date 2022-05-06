import React from "react";
import Posts from "./Components/Posts"
import "./index.css";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";

const App = () => {
  return <div>
    <NavBar/>
    <UserProfile/>
    <main>
      <Posts/>
    </main>
    <Contacts/>
  </div>
};

export default App;
