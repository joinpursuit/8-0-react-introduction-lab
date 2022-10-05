import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Posts from "./components/Posts";
import UserProfile from "./components/UserProfile";
import Contacts from "./components/Contacts";
import ContactUserCard from "./components/ContactUserCard";




const App = () => {

  return <>

<NavBar className= "nav"/>
<Post />
<Posts />
<UserProfile />
<Contacts />
<ContactUserCard />

  </>
  // <p>Hello, world!</p>

 
};

export default App;
