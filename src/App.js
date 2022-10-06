import React from "react";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="mainContainer">
        <section className="feed">
          <UserProfile />
          <Posts />
        </section>
        <Contacts />
      </main>
    </>
  );
};

export default App;
