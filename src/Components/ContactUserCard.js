import react from 'react';
import './Feed.css';  

const ContactUserCard = () => {
    const contactCardInfo = {
        name: 'Jordan Walke',
        jobTitle: 'React Creator',
        text: 'Lorem Ipsum'
    }

    return (
        <div className="contact-card">
            <img src="./profile.png" alt="profile.png" />
            <p className='name'>{contactCardInfo.name}</p>
            <p className='jobTitle'>{contactCardInfo.jobTitle}</p>
            <p className='text'>{contactCardInfo.text}</p>
        </div>
    )
}

export default ContactUserCard;