import profile from 'public/profile.png';

const UserProfile = ()=> {
    return (
        <div>
            <img src={profile} alt="Profile Photo" />
            <h2>Jordan Walke</h2>
            <h3>React Creator</h3>
            <div>Lorem Ipsum</div>
        </div>
    )
}

export default UserProfile;