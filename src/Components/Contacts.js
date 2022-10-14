import ContactUserCard from "./ContactUserCard"
import styles from "./Contacts.module.css"


const Contacts = () => {

    return (
        <aside className={styles.Contacts}>
            <h1>Contacts</h1>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />

        </aside>
    )

}

export default Contacts