const NavBar = () => {
    return (
        <div className="NavBar">
            <form>
                <input type="submit" value="What is Pursuit?" />
            </form>
            <form>
                <input type="submit" value="Create an account" />   
            </form>
            <form>
                <input type="submit" value="Sign in" />
            </form>
        </div>
    );
}

export default NavBar;