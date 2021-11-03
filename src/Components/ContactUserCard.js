import { Component } from "react";


class ContactUserCard extends Component {
    constructor(){
        super()
    };

    render(){
        return (
            <div className="contactUserCard">
                <h3>Name</h3>
                <div>Address</div>
                <div>Phone Number</div>
            </div>
        )
    }
}

export default ContactUserCard;