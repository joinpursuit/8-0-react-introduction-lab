import "./ContactUserCard.css";

const ContactUserCard = () => {
  return (
    <div className="contactCard">
      <div className="forPic">
        <img className="contactImg" src="./profile.png" alt="Profile Pic"></img>
      </div>
      <div className="textInCard">
        <h3>Jordon Walker</h3>
        <h5>React Creator</h5>
        <p>Random words about a human!</p>
      </div>
    </div>
  );
};

export default ContactUserCard;
