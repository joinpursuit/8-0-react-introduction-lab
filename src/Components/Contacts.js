// shortcut type rsf then press tab and enter

// import React from 'react';
import ContactUserCard from './ContactUserCard';

function Contacts() {
    return (
        <div className='allContacts'>
            <h3>Contacts</h3>
            <ul>
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </ul>
        </div>
    );
}

export default Contacts;













