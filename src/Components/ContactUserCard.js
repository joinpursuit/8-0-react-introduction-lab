const ContactUserCard = () => {
    const contactObj = {
        name: "Jordan Walke",
        occupation: "React Creator",
        notes: "Lorem Ipsem"
    }

    return (
        <div>
            <img src="./profile.png" alt="profile.png" />
            <p>{contactObj.name}</p>
            <p>{contactObj.occupation}</p>
            <p>{contactObj.notes}</p>
        </div>
    )
}
export default ContactUserCard;