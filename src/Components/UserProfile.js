import userEvent from '@testing-library/user-event';
import React from 'react';
import './UserProfile.css';

class UserProfile extends React.Component {
  constructor() {
    super();
    this.picture =
      'https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg';
    this.name = 'Riley';
    this.title = 'Developer';
    this.description = 'test';
  }
  render() {
    return (
      <div className="UserProfile">
        <img src={this.picture} />
        <div>
          <h2>{this.name}</h2>
          <h3>{this.title}</h3>
          <p>{this.description}</p>
        </div>
      </div>
    );
  }
}
export default UserProfile;
