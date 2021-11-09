import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        Hello World
        <NavBar />
        <UserProfile />
        <Posts />
        <Contacts />
      </div>
    );
  }
}
export default App;

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <UserProfile />
//       <Posts />
//       <Contacts />
//     </div>
//   );
// };

// export default App;
