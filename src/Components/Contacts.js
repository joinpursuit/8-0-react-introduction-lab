import React from "react";
import ContactUserCard from "./ContactUserCard";

const Contact = () => {
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

export default Contact