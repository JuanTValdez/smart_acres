import React from 'react';
import '../styles/Footer.css';
import Greenhouse from '../images/greenhouse_sml.png';

export default function Footer() {
	return (
		<div>
			<div className='grid-footer'>
				{/* Top of Footer */}
				<div className='footer-top'>
					<div className='greenhouse-img'>
						<img src={Greenhouse} alt='' />
					</div>

					<div className='sign-up'>Sign Up</div>
				</div>
				{/* Bottom of Footer */}

				<div className='footer-bottom'>
					<div className='path'></div>
					<div className='subscribe'></div>{' '}
				</div>
			</div>
		</div>
	);
}
