const NavBar = () => {
    const links = ["What is Pursuit?","Create an account","Sign in"]
    return (
        <nav>
            <ul style={{ textAlign: "right" , backgroundColor: "blueviolet",padding:10  }}>
                 { links.map(link => <button style={{ textAlign: "right" , marginLeft:15 }}>{link}</button>) } 
            </ul>
        </nav>
    )
}



export default NavBar