import React from 'react';
import Posts from './Components/Posts';
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import ContactUserCard from "./Components/ContactUserCard"
import Contacts from './Components/Contacts';
import './index.css';;

const App = () => {
    return (
			<div>
				<NavBar> </NavBar> 
                <UserProfile> </UserProfile> 
                <Posts> </Posts>
				<Contacts> </Contacts>
			</div>
		);
};

export default App;