import React from 'react';
import NavBar from './Components/NavBar';
import Posts from './Components/Posts';
import './index.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Posts />
      </main>
    </div>
  );
};

export default App;
