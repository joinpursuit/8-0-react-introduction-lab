import React from 'react';
import ContactUserCard from './ContactUserCard.js';
import './Contacts.css';

class Contacts extends React.Component {
  constructor() {
    super();
  }
  render() {
    let sampleContacts = ['1', '2', '3'];
    return (
      <div className="Contacts">
        <h2>Contacts</h2>
        {sampleContacts.map((item) => (
          <ContactUserCard />
        ))}
      </div>
    );
  }
}

export default Contacts;
