import ContactUserCard from "./ContactUserCard"

function Contacts(){
    return (
        <div>
            <p>Contacts</p>
            <ul>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            </ul>
        </div>
    )
}

export default Contacts