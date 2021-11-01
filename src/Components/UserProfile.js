import { Component } from "react";

class UserProfile extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="profile-container">
        <div className="user-img">
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
            alt="user face"
          ></img>
        </div>
        <div className="profile-text">
          <div>
            <strong>Jordan Walke</strong>
          </div>
          <div>
            <strong>React Creator</strong>
          </div>
          <div>Lorem Ipsem</div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
