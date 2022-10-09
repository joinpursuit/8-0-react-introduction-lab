import React from "react";  // package
import "./index.css";  //local file
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import Contacts from "./components/Contacts";
import Posts from "./components/Posts";

const App = () => {
  return (
    <>
    <NavBar/>  
    <UserProfile/>
    <Posts/>
    <Contacts/>
    {/* <ContactUserCard/> */}
    </>
  );
};

export default App;
