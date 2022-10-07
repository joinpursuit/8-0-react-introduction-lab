import React from "react";
import "./index.css";
import Posts from "./Components/Posts"
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";





// const App = () => {
//   return <p>Hello, world!</p>;
// };



const App = () => {
  return <div>
    <NavBar/>
    <UserProfile/>
    <main>
      <Posts/>
    </main>
    <Contacts/>
  </div>
};



export default App;
