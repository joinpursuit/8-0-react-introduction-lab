import './index.css';
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Contacts from './Components/Contacts';
import Posts from './Components/Posts';
import '../src/Components/style.css';

const App = () => {
  return (
    <div className='app-container'>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
};

export default App;
