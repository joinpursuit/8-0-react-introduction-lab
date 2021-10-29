import userEvent from '@testing-library/user-event';
import React from 'react';

class UserProfile extends React.Component {
  constructor() {
    super();
  }
  render() {
    let user = {
      name: 'Riley',
      title: 'Developer',
      picture:
        'https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg',
    };
    return (
      <div>
        <img src={user.picture} />
        <h2>{user.name}</h2>
        <h3>{user.title}</h3>
        <p>test</p>
      </div>
    );
  }
}
export default UserProfile;
