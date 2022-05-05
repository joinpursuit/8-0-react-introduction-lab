

const NavBar = () => {
    const postData = {      
    button1: "What is Pursuit",
    button2: "Create an account",
    button3: "Sign In"
}


return (    
    <div className="nav">
        <button>{postData.button1}</button>
        <button>{postData.button2}</button>
        <button>{postData.button3}</button>
    </div>
)

};


export default NavBar;