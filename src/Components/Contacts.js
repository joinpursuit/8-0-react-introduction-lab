import "./Contacts.css";
import ContactUserCard from "./ContactUserCard"

const Contacts = () => {
    return (
        <div className='Contacts'>
            <h3>Contacts</h3>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
        </div>
    );
};

export default Contacts;