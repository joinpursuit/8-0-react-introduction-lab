import React from 'react';
import './UserProfile.css';
let user = {
  name: 'Jordan Walke',
  bio: 'React Creator',
  description: 'Lorem Ipsem',
};

const UserProfile = () => {
  return (
    <div className='userProfile'>
      <img src='./profile.png' alt='post' />
      <div className='user'>
        <p className='name'>{user.name}</p>
        <p className='bio'>{user.bio}</p>
        <p className='description'>{user.description}</p>
      </div>
    </div>
  );
};

export default UserProfile;
