const user = {
    name: 'Jordan Walke',
    occupation: 'React Creator',
    title: 'Lorem Ipsem',
  };
  
  const ContactUserCard = () => {
    return (
      <div className="card">
        {user.name}
        {user.occupation}
        {user.title}
      </div>
    );
  };
  export default ContactUserCard;