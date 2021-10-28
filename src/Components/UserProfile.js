import './UserProfile.css';
import profile from '../assets/profile.png';

const UserProfile = () => {
  return (
    <div className="User-Profile">
      <img src={profile} alt="profile" />
      <div className="User-Description">
        <h3>Jordan Walke</h3>
        <h4>React Creator</h4>
        <p>Lorem Ipsem</p>
      </div>
    </div>
  );
};

export default UserProfile;
