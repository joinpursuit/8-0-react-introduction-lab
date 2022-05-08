
const userInfo = {
  name : 'Jordan Walke',
  job : 'React Creator',
  info : 'Lorem Ipsum', 
}

const UserProfile = () => {
  return (
    <div className='userCardInfo'>
      <img src='profile.png'></img>
      <h2>{userInfo.name}</h2>
      <h3>{userInfo.job}</h3>
      <p>{userInfo.info}</p>
    </div>
  )
}

export default UserProfile; 