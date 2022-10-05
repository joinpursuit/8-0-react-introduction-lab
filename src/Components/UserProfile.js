import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <img src="./profile.png" alt="Profile pic"></img>
      <div className="aboutUser">
        <h1 className="userName">Shaik Kamil</h1>
        <h2 className="job"> React Creator</h2>
        <p className="bio">Bio</p>
      </div>
    </div>
  );
};

export default UserProfile;
