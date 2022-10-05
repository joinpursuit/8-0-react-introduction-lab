import React from 'react';
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Posts from './Components/Posts';
import Post from './Components/Post';
import Contacts from './Components/Contacts';
import './index.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
};

export default App;
