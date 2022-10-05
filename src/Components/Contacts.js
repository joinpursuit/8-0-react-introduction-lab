import ContactUserCard from "./ContactUserCard"
import UserContact from "./UserContact.css"


function Contacts(){
    return (
        <aside id="contacts">
            <p>Contacts</p>
            <ul id="card">
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            </ul>
        </aside>
    )
}

export default Contacts