import userEvent from '@testing-library/user-event';
import React from 'react';

class UserProfile extends React.Component {
  constructor() {
    super();
    this.picture =
      'https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg';
    this.name = 'Riley';
    this.title = 'Developer';
  }
  render() {
    return (
      <div>
        <img src={this.picture} />
        <h2>{this.name}</h2>
        <h3>{this.title}</h3>
        <p>test</p>
      </div>
    );
  }
}
export default UserProfile;
