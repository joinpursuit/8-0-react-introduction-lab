import react from "react";
import ContactUserCard from "./ContactUserCard";

const ContactList = () => {
    return (
        <div className="allContacts">
            <strong>
                Contacts
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </strong>
        </div>
    );
};

export default ContactList;