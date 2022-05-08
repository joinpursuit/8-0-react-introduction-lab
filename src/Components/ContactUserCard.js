const ContactUserCard = () => {
    const contactCardInfo = {
        name: 'Tim McKiernan',
        jobTitle: 'Teacher',
        text: 'Pursuit'
    }
    const amazon = {
        imgURL:"whatever",
        description:"stuff",
        rating:5,
        price:10,
        isPrime:false,
        sponsored:true,
        inStock: true,
    }
    return (
        <div className="contact-card">
            <img src='./profile.png' alt='profile.png'/>
            <p classname='name'>{contactCardInfo.name}</p>
            <p classname='jobTitle'>{contactCardInfo.jobTitle}</p>
            <p classname='text'>{contactCardInfo.text}</p>
        </div>
    )
}

export default ContactUserCard;