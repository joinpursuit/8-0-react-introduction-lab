import React from "react"
import NavBar from "./Components/NavBar.js"
import UserProfile from "./Components/UserProfile.js"
import Posts from "./Components/Posts.js"
import Contacts from "./Components/Contacts.js"

import "./index.css"
import "./Components/NavBar.css"
import "./Components/UserProfile.css"
import "./Components/Posts.css"
import "./Components/Post.css"
import "./Components/Contacts.css"
import "./Components/ContactUserCard.css"


const App = () => {
  return (
<div className='App'>
  <NavBar />
  <UserProfile />
  <Posts />
  <Contacts />
</div>
  )
}

export default App;
