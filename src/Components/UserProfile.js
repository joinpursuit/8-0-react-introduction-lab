const UserProfile = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/profile.png"} alt="profilePic" />
      <h2>Jordan Walke</h2>
      <h3>React Creator</h3>
      <p>Lorem Ipsem</p>
    </div>
  );
};

export default UserProfile;
