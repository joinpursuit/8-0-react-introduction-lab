
const contactUserInfo = { 
  name : 'Jordan Walke',
  job: 'React Creator',
  info : 'Lorem Ipsum'
}

const ContactUserCard = () => {
  return (
    <div className="contactUserCardInfo">
      <img src="profile.png"></img>
      <h2>{contactUserInfo.name}</h2>
      <h3>{contactUserInfo.job}</h3>
      <p>{contactUserInfo.info}</p>
    </div>
  )
}

export default ContactUserCard;
