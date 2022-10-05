import './NavBar.css';
const NavBar = () => {
  return (
    <div className="Navigation">
      <button type="submit" className="Pursuit">
        What is Pursuit?
      </button>
      <button type="submit" className="Account">
        Create an Account
      </button>
      <button type="submit" className="SignIn">
        Sign In
      </button>
    </div>
  );
};

export default NavBar;
