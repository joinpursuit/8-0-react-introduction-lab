const ContactUserCard = (props) => {
    const {img, name, title, bio} = props
    return (
        <div>
          {img}
          {name}
          {title}
          {bio}
        </div>
    )        
  }

  export default ContactUserCard