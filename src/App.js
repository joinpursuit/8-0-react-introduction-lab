import React from 'react';
import Posts from './Components/Posts';
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import ContactUserCard from "./Components/ContactUserCard"
import Contacts from './Components/Contacts';
import './index.css';

const App = () => {
  return (
  <div>
    <NavBar />
   <UserProfile/>
   <ContactUserCard/>
    <main>
     <Contacts/>
      <Posts/>
    </main>
  </div>
  );
};

export default App;
