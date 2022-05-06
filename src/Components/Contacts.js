import React from 'react';
import ContactUserCard from './ContactUserCard.js';

import './Contacts.css';
const Contacts = () => {
  return (
    <div className='contacts'>
      <p>Contacts</p>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};

export default Contacts;
