import React from "react";
import "./index.css";
import NavBar from "./NavBar";
import UserProfile from "./UserProfile";
import Posts from "./Posts";
import Contacts from "./Contacts";


import { Component } from "react";


class App extends Component {
    constructor(){
      super()
    };

    render(){
      return (
        <div id="App">
          <NavBar />
          <UserProfile />
          <Posts />
          <Contacts />
        </div>
       
      )
    }
      
};

export default App;
