
function NavBar() {
  const buttons = ["What is Pursuit", "Create an account", "Sign in"]
  return (
    <div>
      {buttons.map(button => <button style={{ background: 'light gray', lineHeight: 1 }}>{button}</button>)}
    </div>
  );
};

export default NavBar;