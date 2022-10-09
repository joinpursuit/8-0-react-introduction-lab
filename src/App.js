import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import Posts from "./components/Posts";
import Contacts from "./components/Contacts";

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
