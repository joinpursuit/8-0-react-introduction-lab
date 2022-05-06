import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts.js";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts";

const App = () => {
	return (
		<>
			<Contacts />
			<NavBar />
			<UserProfile />
			<Posts />
		</>
	);
};

export default App;
