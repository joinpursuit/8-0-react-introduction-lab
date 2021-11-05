import "../profile.css";


const profileInf = {
    name: "Andres Ballares",
    title: "Web Developer",
    imageLink: "https://media-exp1.licdn.com/dms/image/C4D03AQH7-8Lk3wpqzw/profile-displayphoto-shrink_200_200/0/1632460153436?e=1640822400&v=beta&t=Ff99yixC4pJENBINTW4Z4ES9Eb4vui4bzWG5beocx4M",
    text: "Lorem Ipsem",

}



function UserProfile () {
    return (
        <div>
            <img src={profileInf.imageLink} alt= "image" width='120' height='120'></img>
            <h4>{profileInf.name}</h4>
            <h6>{profileInf.title}</h6>
            <p>{profileInf.text}</p>
        </div>
    )
}


export default UserProfile;