import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
// import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <section className = 'left'>
          <UserProfile/>
          <Posts/>
        </section>
        <Contacts/>
      </main>
    </>
  )
};

export default App;
