import { Component } from "react";
import ContactUserCard from "./ContactUserCard";

class Contacts extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
    );
  }
}
export default Contacts;
