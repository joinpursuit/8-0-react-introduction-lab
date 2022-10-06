import "./ContactUserCard.css";

const ContactUserCard = () => {
  return (
    <aside className="contactUserCard">
      <img className="pic" src="../../profile.png" alt="Profile" />
      <section className="userInfo">
        <h3>Jordan Walke</h3>
        <h4>React Creator</h4>
        <p>Lorem ipsum</p>
      </section>
    </aside>
  );
};

export default ContactUserCard;
