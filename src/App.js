import React from "react";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts"
import Contacts from "./Components/Contacts"
import "./index.css";
import Apps from "./Components/Apps.css"

const App = () => {
  return(
    <div id="info">

      <NavBar/>

      <section id="user">
        <div id="person">
      <UserProfile/>
      <Posts/>
        </div>

      <form id="profile">
      <Contacts/>
      </form>

      </section>
    </div>
  )
};

export default App;
