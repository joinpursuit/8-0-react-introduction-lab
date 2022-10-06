import ContactUserCard from "./ContactUserCard";
import "./Contacts.css";
export default function Contacts() {
  return (
    <div className="contacts">
      <h4>Contacts</h4>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
}
