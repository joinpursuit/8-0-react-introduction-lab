import React from "react";
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Posts from './Components/Posts';
import Contacts from './Components/Contacts';
import "./index.css";

const App = () => {
    return <>
        <nav>< NavBar /></nav>
        <main>
            <article>
                <UserProfile />
                <Posts />
            </article>
            <aside>
                <Contacts />
            </aside>
        </main>
    </>;
};

export default App;
