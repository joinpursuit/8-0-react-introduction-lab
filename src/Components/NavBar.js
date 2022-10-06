import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="Header">
      <header>
        <button className="What" type="submit">
          What is Pursuit?
        </button>
        <button className="Account" type="submit">
          Creae an account
        </button>
        <button className="SignIn" type="submit">
          Sign in
        </button>
      </header>
    </div>
  );
};

export default NavBar;
