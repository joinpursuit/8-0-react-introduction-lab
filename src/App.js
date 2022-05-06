import React from 'react';
import NavBar from './Components/NavBar';
import Posts from './Components/Posts';
import UserProfile from './Components/UserProfile';
import Contacts from './Components/Contacts';
import './index.css';

const App = () => {
  return (
    <div>
      <section>
        <NavBar />
      </section>
      <section>
        <UserProfile />
      </section>
      <main>
        <Posts />
      </main>
      <section>
        <Contacts />
      </section>
    </div>
  );
};

export default App;
