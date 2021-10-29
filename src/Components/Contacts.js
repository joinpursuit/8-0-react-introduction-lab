import ContactUserCard from "./ContactUserCard.js";

function Contacts() {
    return (
        <div className="user-card">
           <h3>{'Contacts'}</h3>
           <ContactUserCard />
           <ContactUserCard />
           <ContactUserCard />
           <ContactUserCard />
        </div>
    );
}

export default Contacts;