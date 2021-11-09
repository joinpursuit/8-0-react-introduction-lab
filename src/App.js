import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import ContactList from "./Components/Contacts"

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <UserProfile />
      <Posts />
      <ContactList />
    </div>
  );
};

export default App;
