import React from 'react';
import './index.css';
import NavBar from './Components/NavBar.js';
import UserProfile from './Components/UserProfile.js';
import Posts from './Components/Posts.js';
import Contacts from './Components/Contacts.js';

const App = () => {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Contacts />
      <Posts />
    </>
  );
};

export default App;
