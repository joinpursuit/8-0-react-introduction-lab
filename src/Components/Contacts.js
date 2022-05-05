import ContactUserCard from "./ContactUserCard";
import "./post.css";


const Contacts = () => {
    return (
        <div className="contact">
        <h3>Contacts</h3>  
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
   
    )
}

export default Contacts;