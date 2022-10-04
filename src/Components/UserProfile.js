import Description from "./Description";
import Img from "./Img";


 
 export function UserProfile() {
    return (
        <div className="UserProfile">
            <Img />
            <Description name ="Destiny" job= "Pursuit Fellow" other="Virtual Reality" />
        </div>
    )
 }