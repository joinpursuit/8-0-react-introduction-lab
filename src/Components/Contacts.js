import { ContactUserCard } from "./ContactUserCard";
import Img from "./Img";

export function Contacts() {
    const contact = [
        {name: `Person A`, job:`work`, other:`chef`},
        {name: `Person B`, job:`work`, other:`gamer`},
        {name: `Person C`, job:`work`, other:`painter`},
    ]
    return(
        <ul>Contacts
            {contact.map(obj => {
                return(
                    <li>
                        <Img />
                        <ContactUserCard object = {obj} />
                    </li>
                )
            })}
        
        </ul>
        
    )
}