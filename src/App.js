import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts"
import NavBar from "./Components/NavBar"
import Posts from "./Components/Posts";
import UserProfile from"./Components/UserProfile";

const App = () => {
  return <p>Hello, world!</p>;

function App() {
  // return <p>Hello, world!</p>
  return ( 
  <div>
  <NavBar></NavBar>
  <UserProfile></UserProfile>
  <Posts></Posts>
  <Contacts></Contacts>
  </div>


  )
};
}
export default App;