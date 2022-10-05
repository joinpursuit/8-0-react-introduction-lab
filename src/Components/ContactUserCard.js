import React from "react";

const ContactUserCard = () => {
    const userCard = { 
        name: 'Jordan Walke',
        jobTitle: 'React Creator',
        text: 'Lorem Ipsum'
    }
    return (
        <div>
            <img src="profile.png" alt="profile.png"/>
            <p className="name">{userCard.name}</p>
            <p className="jobTitle">{userCard.jobTitle}</p>
            <p className="text">{userCard.text}</p>
        </div>
    )
}

export default ContactUserCard