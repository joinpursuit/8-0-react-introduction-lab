import React from "react";
import "./index.css";

import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

// prettier-ignore
const App = () => {
  return (
    <>
      <section className="NavBar-section">
        <NavBar />
      </section>

      <section className="UserProfile-section">
        <UserProfile />
      </section>

      <section className="Posts-section">
        <Posts />
      </section>

      <section className="Contacts-section">
        <Contacts />
      </section>
    </>
  )
};

export default App;
