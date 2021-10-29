import ContactUserCard from "./ContactUserCard";

const Contacts = () => {
    return (
        <div className="list-of-contacts">
            <h2>Contacts</h2>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    )
}

export default Contacts;