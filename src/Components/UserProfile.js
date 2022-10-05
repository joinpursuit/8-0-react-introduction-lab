import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profileBox">
      <img className="profileImg" src="./profile.png" alt="Profile Pic"></img>
      <div className="profileText">
        <h3>Jordon Walker</h3>
        <h5>React Creator</h5>
        <p>Random words shall go here! Whatever you please</p>
      </div>
    </div>
  );
};

export default UserProfile;
