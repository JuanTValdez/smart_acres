import React from 'react';
import '../styles/NavBar.css';
export default function NavBar() {
	return (
		<nav className='nav-container'>
			<div className='logo'></div>

			<div className='links'>
				<p className='nav-item'>Green Team</p>
				<p className='nav-item'>Start Smart</p>
				<p className='nav-item'>Community</p>
				<p className='nav-item'>Contact Us</p>
			</div>
		</nav>
	);
}
