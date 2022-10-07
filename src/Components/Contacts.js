import "./Contacts.css";
import ContactUserCard from "./ContactUserCard";

function Contacts() {
    return (
      <div id="Contacts">
        <h3 className="Contact">Contacts</h3>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
    );
  }
  
  export default  Contacts ;