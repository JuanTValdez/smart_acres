import React from 'react';
import '../styles/NavBar.css';
export default function NavBar() {
	return (
		<nav className='nav-container'>
			<div className='logo'></div>

			<div className='links'>
				<p>Green Team</p>
				<p>Start Smart</p>
				<p>Community</p>
				<p>Contact Us</p>
			</div>
		</nav>
	);
}
