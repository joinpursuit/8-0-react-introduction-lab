import ContactUserCard from './ContactUserCard'
//This is inside the component so do not need to call that. 

const Contacts = () => {
    return(
        <div className='contacts'>
            <ContactUserCard/>
            <ContactUserCard/>   
            <ContactUserCard/>
            <ContactUserCard/>
        </div>
    )
    //It wants four according the the chart.
}

export default Contacts