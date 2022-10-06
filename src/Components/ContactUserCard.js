import "./ContactUserCard.css";

const arr = [
  {
    name: "Shaik Kamil",
    title: "Pursuit Fellow",
    funFact: "A gamer and anime lover",
  },
  {
    name: "Mina Grullon",
    title: "Pursuit Fellow",
    funFact: "Has the cutest dog",
  },
  {
    name: "Salina Malik",
    title: "Pursuit Fellow",
    funFact: "A gamer and anime lover",
  },
  {
    name: "Edgy, The Goat",
    title: "Pursuit Fellow",
    funFact: "Has the dopest Zoom background",
  },
];
let person = arr.map((e) => e.name);
let status = arr.map((e) => e.title);
let fact = arr.map((e) => e.funFact);

export default function ContactUserCard() {
  return (
    <div className="conProf">
      <div className="conImg">
        <img src="./profile.png"></img>
      </div>
      <div className="conInfo">
        <h3>Jordan Walke</h3>
        <h5>React Creator</h5>
        <p>Lorem</p>
      </div>
    </div>
  );
}
