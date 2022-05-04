import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import ContactUserCard from "./Components/ContactUserCard";

const App = () => {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Posts />
      <ContactUserCard />
    </>
  );
};

export default App;
