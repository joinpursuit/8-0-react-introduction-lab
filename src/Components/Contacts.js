import ContactUserCard from "./ContactUserCard";

function Contacts() {
    // return <div id="contacts-container">Contacts</div>;
    return (
        <div id="contacts-container">
            <h4>Contacts</h4>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    );
}

export default Contacts;