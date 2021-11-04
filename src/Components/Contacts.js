import React from "react";
import ContactUserCard from "./ContactUserCard";

class Contacts extends React.Component {
    constructor(){
        super()
    }

    render (){
        return (
            <div className="Contacts">
                <div>
                    <h2>Contacts</h2>
                    <ContactUserCard />
                    <ContactUserCard />
                    <ContactUserCard />
                    <ContactUserCard />
                </div>
            </div>
        );
    }
}

export default Contacts;