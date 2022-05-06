import React from 'react';
import './ContactUserCard.css';

let user = {
  name: 'Jordan Walke',
  bio: 'React Creator',
  description: 'Lorem Ipsem',
};

const ContactUserCard = () => {
  return (
    <div className='contactUserCard'>
      <img src='./profile.png' alt='profile pic' />
      <div clsassName='user'>
        <p className='name'>{user.name}</p>
        <p className='bio'>{user.bio}</p>
        <p className='description'>{user.description}</p>
      </div>
    </div>
  );
};

export default ContactUserCard;
