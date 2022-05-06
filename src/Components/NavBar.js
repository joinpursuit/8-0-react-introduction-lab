import React from 'react';

const NavBar = () => {
  let navBtns = [
    'What is Pursuit?',
    'Create an account',
    'Sign in',
    'Contact Us',
  ];
  return (
    <nav className='nav-bar'>
      {navBtns.map((navBtn) => (
        <button className='btn'>{navBtn}</button>
      ))}
    </nav>
  );
};

export default NavBar;
