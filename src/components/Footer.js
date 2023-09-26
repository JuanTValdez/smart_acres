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

					<div className='sign-up'>
						<p className='txt-1'>Ready To start your Smart Acres journey?</p>
						<p className='txt-2'>
							Keep in touch with our farm because there's a lot to be grown and
							especially a lot more to be tasted!
						</p>
					</div>
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
