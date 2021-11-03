import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <UserProfile/>
      <Posts/>
      <Contacts/>
    </React.Fragment>
  );
};

export default App;
