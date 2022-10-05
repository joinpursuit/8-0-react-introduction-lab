import ContactUserCard from './ContactUserCard';
import './Contacts.css';
const Contacts = () => {
  return (
    <div className="asideContainer">
      <aside className="Aside">
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </aside>
    </div>
  );
};

export default Contacts;
