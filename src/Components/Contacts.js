import React from "react";
import ContactUserCard from "./ContactUserCard";

class Contacts extends React.Component {
    render(){
        return (
            <div className="contacts">
                <h2>Contacts</h2>
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </div>
        )
    }
}

export default Contacts;