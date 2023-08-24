/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import NavBar from './components/Navbar.js';
import Intro from './components/IntroSection.js';
import ThinkOutside from './components/ThinkOutside.js';

function App() {
  return (
    <div className='App'>
      {/* // TODO - Add Smart Acres Logo */}
      <NavBar />
      <Intro />
      <ThinkOutside />
    </div>
  );
}

export default App;
