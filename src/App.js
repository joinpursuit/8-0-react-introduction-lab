import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

const App = () => {
  return (
    <>
      <NavBar />
      <section className="two-grid-columns">
        <main>
          <UserProfile />
          <Posts />
        </main>
        <Contacts />
      </section>
    </>
  );
};

export default App;
