import ContactUserCard from "./ContactUserCard"

const Contacts = () => {
  return (
    <div className="Contacts">
      <h2>Contacts</h2>
      <ul>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </ul>
    </div>
  )
}

export default Contacts
