const ContactUserCard = () => {
  const contacts = [
    { name: 'Jordan Walke', title: 'React Creator', info: 'Loren Ipsem' },
    { name: 'Jordan Walke', title: 'React Creator', info: 'Loren Ipsem' },
    { name: 'Jordan Walke', title: 'React Creator', info: 'Loren Ipsem' },
  ];
  return contacts.map((user) => (
    <div>
      <img src="profile.png" />
      <p>{user.name}</p>
      <p>
        <strong>{user.title}</strong>
      </p>
      <p>{user.info}</p>
    </div>
  ));
};
export default ContactUserCard;
