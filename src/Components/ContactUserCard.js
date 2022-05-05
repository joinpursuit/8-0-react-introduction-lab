import './Feed.css'; 

const ContactUserCard = () => {
    const contactCardInfo = {
        name: 'Jordan Walke',
        jobTitle: 'React Creator',
        text: 'Lorem Ipsum'
    }

    return (
        <div className="contact-card">
            <img src="/Users/david/Pursuit/Module3/react-introduction-lab/public/profile.png" alt="profile pic" />
            <h3>{contactCardInfo.name}</h3>
            <h4>{contactCardInfo.jobTitle}</h4>
            <p>{contactCardInfo.text}</p>
        </div>
    )
}

export default ContactUserCard;