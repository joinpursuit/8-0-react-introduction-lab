import image1 from "./pic.webp";

function UserProfile() {
  return (
    <div className="profile">
      <div>
        <img src={image1} alt="Profile pic" width="125" height="150" />
      </div>
      <div className="user">
        <h1>Younes Tahiri</h1>
        <h2>Web Developer</h2>
        <p>Lorem Ipsem</p>
      </div>
    </div>
  );
}

export default UserProfile;
