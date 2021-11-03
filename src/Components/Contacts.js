import React from "react";
import ContactUserCard from "./ContactUserCard";

class Contacts extends React.Component {
    constructor(){
        super()
    }

    render (){
        return (
            <div className="contact-user-cards">
                <div>
                    <ContactUserCard />;
                    <ContactUserCard />;
                    <ContactUserCard />;
                    <ContactUserCard />;
                </div>
            </div>
        );
    }
}

export default Contacts;