import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <main>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
      <p>Hello, world!</p>
    </main>
  );
}

export default App;
