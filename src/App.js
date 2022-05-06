import React from 'react';
import './index.css';
import '../src/Components/App.css';
import NavBar from './Components/NavBar.js';
import UserProfile from './Components/UserProfile.js';
import Contacts from './Components/Contacts.js';
import Posts from './Components/Posts.js';

const App = () => {
  return (
    <div className='menu'>
      <NavBar />
      <div className='users-info'>
      <UserProfile />
      <Posts />
      <Contacts />
      </div>
    </div>
  );
};

export default App;
