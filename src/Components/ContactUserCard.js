import "./ContactUserCard.css";

const ContactUserCard = () => {
  return (
    <div className="contactCard">
      <div className="forPic">
        <img className="contactImg" src="./profile.png" alt="Profile Pic"></img>
      </div>
      <h3>Jordon Walker</h3>
      <h5>React Creator</h5>
      <p>Random words shall go here! Whatever you please</p>
    </div>
  );
};

export default ContactUserCard;
