import React from 'react';
import './Contacts.css';
import ContactUserCard from './ContactUserCard';
const Contacts = () => {
  return (
    <section className='Contacts'>
      <h2>Contacts</h2>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </section>
  );
};
export default Contacts;
