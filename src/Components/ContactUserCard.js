import react from 'react';

const ContactUserCard = () => {
    const contactCardInfo = {
        name:'Marcy',
        jobTitle: 'Reactavist',
        text: 'Lorem Ipsum'
    }
    return (
        <div className="contact-card">
            <img src="./profile.png" alt="profile png"/>
        </div>
    )
}

export default ContactUserCard;