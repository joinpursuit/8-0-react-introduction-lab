import React from "react";
import "./index.css";
import NavBar from "./component/NavBar";
import UserProfile from "./component/UserProfile";
import Posts from "./component/Posts";
import Contacts from "./component/Contacts";
// import ContactUserCard from "./component/ContactUserCard";
// import Post from "./component/Post";

// import "./App.css";

// import { Component } from "react";

// const App = () => {
//   return <p>Hello, world!</p>;
// };

// class App extends Component {
//   constructor() {
//     super();
//   }


const App = () => {
  return (
  <div className="app">
    <NavBar />
    <UserProfile />
    <Posts />
    <Contacts />
  </div>
  );
 };

export default App;
