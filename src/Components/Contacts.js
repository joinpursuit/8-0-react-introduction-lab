import { Component } from "react";
import ContactUserCard from "./ContactUserCard";

class Contacts extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div id ="contacts">
                <h2>Contacts</h2>
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </div>
        )
    }

}

export default Contacts 