import { Component } from "react";
import ContactUserCard from "./ContactUserCard";

class Contacts extends Component {
    constructor(){
        super()
    };

    render(){
        return (
            <div className="contacts">
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </div>
        )
    }
}

export default Contacts;