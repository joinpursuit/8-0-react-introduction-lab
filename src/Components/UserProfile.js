import "./UserProfile.css"
import profilePicture from "./profile.png"


const UserProfile = () => {
    return <div className="profile">
        <img src={profilePicture}></img>
        <h1>Jordan Walke</h1>
        <h2>React Creator</h2>
        <p>Lorem Ipsem</p>
    </div>
}

export default UserProfile