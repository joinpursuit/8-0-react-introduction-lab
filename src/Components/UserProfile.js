let userProfile = {
  name: 'Jordan Walker',
  position: 'React Creator',
  info: 'Lorem Ipsom',
};

const UserProfile = () => {
  return (
    <div className='user-profile'>
      <img className='image' src='./profile.png' alt='Profile' />
      <section className='profile'>
        <h4>{userProfile.name}</h4>
        <h5>{userProfile.position}</h5>
        <h6>{userProfile.info}</h6>
      </section>
    </div>
  );
};

export default UserProfile;
