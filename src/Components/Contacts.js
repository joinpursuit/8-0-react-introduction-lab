import React from 'react';
import ContactUserCard from './ContactUserCard.js';
class Contacts extends React.Component {
  constructor() {
    super();
  }
  render() {
    let sampleContacts = ['1', '2', '3'];
    return (
      <div>
        <h2>Contacts</h2>
        {sampleContacts.map((item) => (
          <ContactUserCard />
        ))}
      </div>
    );
  }
}

export default Contacts;
