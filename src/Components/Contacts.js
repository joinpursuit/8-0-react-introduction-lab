import { ContactUserCard } from "./ContactUserCard";
import Img from "./Img";

export function Contacts() {
    const contact = [
        {name: `A`, job:`work`, other:`chef`},
        {name: `B`, job:`work`, other:`gamer`},
        {name: `C`, job:`work`, other:`painter`},
    ]
    return(
        <ul>
            {contact.map(obj => {
                return(
                    <li>
                        <Img />
                        <ContactUserCard object = {obj} />
                    </li>
                )
            })}
                {/* <li><ContactUserCard /></li>
                <li><ContactUserCard /></li>
                <li><ContactUserCard /></li>
                <li><ContactUserCard /></li> */}
        
        </ul>
        
    )
}