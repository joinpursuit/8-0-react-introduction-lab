import ContactUserCard from './ContactUserCard.js'


const Contacts = () => {

    const profiles = [
        {img: 'User Photo'},
        {name: 'User Name'},
        {title: 'User Profession'},
        {bio: 'User bio'}
    ]

    const profileInfo = profiles.map(profile => {
        return (
            <ContactUserCard
              img={profile.img}
              name={profile.name} 
              title={profile.title} 
              bio={profile.bio} 
            />
        )
    })

    return (   
        <>
         <div className="Contacts">
             <h2>Contacts</h2> 
             <p>{profileInfo}</p>
             <p>{profileInfo}</p>
             <p>{profileInfo}</p>
        </div>
        </>
    )
}

export default Contacts