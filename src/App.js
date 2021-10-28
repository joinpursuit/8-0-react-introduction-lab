import React from "react";
import "./index.css";
import NavBar from './Components/NavBar.js'
import UserProfile from './Components/UserProfile'
import Posts from "./Components/Posts";
const App = () => {
  return (
<>
<NavBar />
<UserProfile />
<Posts />
</>

  )
};

export default App;
