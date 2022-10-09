function ContactUserCard() {
  let userCards = [];
  for (let i = 0; i < 3; i++) {
    userCards[i] = <p> UserCards {i}</p>;
  }
  return userCards;
}

export default ContactUserCard;
