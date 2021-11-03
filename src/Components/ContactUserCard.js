import { Component } from "react";

class ContactUserCard extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div id="user-card">
                <img src="" alt="profile-picture"/>
                <h3>Name</h3>
                <h4> React Creator</h4>
                <p>Lorum ipsim</p>
            </div>
        )
    }
}
export default ContactUserCard 