import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts.js"
import NavBar from "./Components/NavBar.js"
import Posts from "./Components/Posts.js"
import UserProfile from "./Components/UserProfile.js"
//imported all files onto the app.js react file.//

const App = () => {
  return (
  <>
<NavBar/>
<Contacts/>
<Posts/>
<UserProfile/>
</>
  )
  //returned all created app components./ /
};

export default App;
