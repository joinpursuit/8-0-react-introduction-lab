import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profileBox">
      <img className="profileImg" src="./profile.png" alt="Profile Pic"></img>
      <h3>Jordon Walker</h3>
      <h5>React Creator</h5>
      <p>Random words shall go here! Whatever you please</p>
    </div>
  );
};

export default UserProfile;
