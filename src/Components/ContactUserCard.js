const ContactUserCard = () => {
    return (
        <div className="contact-user-card">
            <div className="photo">
                <img src={process.env.PUBLIC_URL + "/profile.png"} alt="profilePic" />
            </div>
            <div className="contact">
                <h2>Jordan Walke</h2>
                <h3>React Creator</h3>
                <div>Lorem Ipsum</div>
            </div>
        </div>
    )
}

export default ContactUserCard;