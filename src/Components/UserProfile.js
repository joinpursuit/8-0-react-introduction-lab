
let name = "Jordan Walke";
let profession = "React Creator"

const UserProfile = () => {
    return (
        <div>
            <img src="./public/profile.png" alt="pfp_pic" />
            <h2>{name}</h2>
            <h3>{profession}</h3>
            <p>Lorem Ipsem</p>
        </div>

    )

}
export default UserProfile