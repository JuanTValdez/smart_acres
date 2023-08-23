/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import NavBar from './components/Navbar.js';
import Intro from './components/IntroSection.js';

function App() {
	return (
		<div className='App'>
			{/* // TODO - Add Smart Acres Logo */}

			<NavBar />
			<Intro />
		</div>
	);
}

export default App;
