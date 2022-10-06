import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import "./index.css";

const App = () => {
  return (
    <p>
      Hello, world!
      <NavBar />
      <UserProfile />
      <Contacts />
    </p>
  );
};

export default App;
