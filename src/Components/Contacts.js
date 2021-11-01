import { Component } from "react";
import ContactUserCard from "./ContactUserCard";

class Contacts extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="contacts-container">
        <div id="contact">
          <strong>Contacts</strong>
        </div>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
    );
  }
}

export default Contacts;
