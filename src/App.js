import { Component } from "react";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Posts from "./components/Posts";
import UserProfile from "./components/UserProfile"
import Contacts from "./components/Contacts";
import ContactUserCard from "./components/ContactUserCard"
import "./index.css";

class App extends Component{
  
  render(){
    return(
    <div>
     <div><NavBar /></div> 
     <div className="main">
      <UserProfile />
      <Posts />
      <Post />
      <Post />
      <Post />
      <Contacts/>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
</div>

    </div>
  )
 }
};

export default App;
