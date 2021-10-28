import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";

function App() {
	return (
		<div>
			{" "}
			<NavBar />
			<UserProfile />
			<Posts />
			<Contacts />
		</div>
	);
}

// function App() {
// 	return (
// 		<div>
// 			<MainNavigation />
// 			<Switch>
// 				<Route path="/" exact>
// 					<AllMeetupsPage />
// 				</Route>
// 				<Route path="/new-meetup" exact>
// 					<NewMeetupPage />
// 				</Route>
// 				<Route path="/favorites" exact>
// 					<FavoritePage />
// 				</Route>
// 			</Switch>
// 		</div>
// 	);
// }

export default App;
