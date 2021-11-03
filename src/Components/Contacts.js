import { Component } from "react";
import ContactUserCard from "./ContactUserCard"

class Contacts extends Component {
    render(){
        return (
            <div>
                <ContactUserCard/>
                <ContactUserCard/>
                <ContactUserCard/>
                <ContactUserCard/>
            </div>
        );
    }
}

export default Contacts;