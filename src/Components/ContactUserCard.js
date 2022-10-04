import Description from "./Description";

export function ContactUserCard({object}) {
   
    return(
        <Description name = {object.name} job = {object.job} other = {object.other} />

    )
}


