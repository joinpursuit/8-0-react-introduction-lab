
import "./post.css";

const ContactUserCard = () => {
    const postData = {
    name: "Jordan",
    jobTitle: "React Creator",
    text: "Lorem Ipsum",
    imageLink: "/Users/zena/pursuit/8-0-react-introduction-lab/public/profile.png"
}


return (
    <div className="card"> 
    <img className='card-image' src = { postData.imageLink } alt="user Image" height="150px" />     
        <h3>{postData.name}</h3>
        <h4>{postData.jobTitle}</h4>
        <p>{postData.text}</p>
    </div>
)

};

export default ContactUserCard;