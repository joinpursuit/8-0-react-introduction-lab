import React from "react";
import "./index.css";

import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Post from './Components/Post';
import Posts from './Components/Posts'
import Contacts from './Components/Contacts';
import ContactUserCard from './Components/ContactUserCard';
import { render } from "@testing-library/react";


const App = () => {
    return( <div>
<NavBar />
<UserProfile />
<Contacts />
<ContactUserCard />
<ContactUserCard />
<ContactUserCard />
<ContactUserCard />

<Post />
<Post />

<Post />

<Posts />


    </div>
    )
  
};

export default App;
