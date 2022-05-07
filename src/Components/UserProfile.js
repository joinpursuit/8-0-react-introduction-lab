import react from 'react';
import './Feed.css'

const UserProfile = () => {
    const userData = {
        name: 'Jordan Walke',
        jobTitle: 'React Creator',
        text: 'Lorem Ipsum'
    }

    return (
        <div className='userProfile'>
            <img src="./profile.png" alt="profile.png" />
            <p className='name'>{userData.name}</p>
            <p className='jobTitle'>{userData.jobTitle}</p>
            <p className='text'>{userData.text}</p>
        </div>
    )
}

export default UserProfile