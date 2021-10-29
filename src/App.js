import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./Components/App.css";

function App() {
	return (
		<>
			<NavBar className="nav" />
			<div className="container">
				<UserProfile className="user" />
				<Posts className="post" />
				<Contacts className="contacts" />
			</div>
		</>
	);
}
export default App;
