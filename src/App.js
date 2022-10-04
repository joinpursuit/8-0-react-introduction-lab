import React from 'react';
import './index.css';
import Contacts from './Components/Contacts'
import NavBar from './Components/NavBar'
import Post from './Components/Posts'
import UserProfile from './Components/UserProfile'
//Import the component files to app so it can read. 

const App = () => {
  return (
  <>
  <NavBar/>
  <UserProfile/>
  <Post/>
  <Contacts/>
  </>
  //Return components according to the map. 
  
  )
};

export default App;
