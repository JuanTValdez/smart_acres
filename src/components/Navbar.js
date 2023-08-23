import React from 'react';
import '../styles/NavBar.css';
export default function NavBar() {
	return (
		<nav className='nav-container ol_orange'>
			<div className='logo ol_blue'></div>

			<div className='links ol_green'>
				<p>Green Team</p>
				<p>Start Smart</p>
				<p>Community</p>
				<p>Contact Us</p>
			</div>
		</nav>
	);
}
