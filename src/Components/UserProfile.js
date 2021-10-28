import "./UserProfile.css";
// import profile from "../../public/profile.png";

const UserProfile = () => {
    return (
        <div className='User-Profile'>
            <img src="../../public/profile.png" alt="profile-image"/>
            <h3>Jordan Walke</h3>
            <h4>React Creator</h4>
            <p>Lorem Ipsem</p>
        </div>
    );
};

export default UserProfile;