
const navBarButtons = {
  button1 : 'What is Pursuit?',
  button2 : 'Creat an Account',
  button3 : 'Sign In',
}

const NavBar = () => {
  return (
    <div className="navBar">
      <button type='button'>{navBarButtons.button1}</button>
      <button type='button'>{navBarButtons.button2}</button>
      <button type='button'>{navBarButtons.button3}</button>

    </div>
  )
}

export default NavBar;
