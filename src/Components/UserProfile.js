const UserProfile = () => {
  const mainUser = {
    name: 'Jordan Walke',
    title: 'React Creator',
    info: 'Loren Ipsem',
  };
  return (
    <div>
      <img src="profile.png" />
      <h3>{mainUser.name}</h3>
      <p>
        <strong>{mainUser.title}</strong>
      </p>
      <p>{mainUser.info}</p>
    </div>
  );
};

export default UserProfile;
