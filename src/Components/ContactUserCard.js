
import "./post.css";

const ContactUserCard = () => {
    const postData = {
    name: "Jordan",
    jobTitle: "React Creator",
    text: "Lorem Ipsum",
    imageLink: "profile.png"
}


return (
    <div className="card"> 
    <img className="card-image" src = { postData.imageLink } alt="user Image" />     
        <h3>{postData.name}</h3>
        <h4>{postData.jobTitle}</h4>
        <p>{postData.text}</p>
    </div>
)

};

export default ContactUserCard;