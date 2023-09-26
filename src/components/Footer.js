import React from 'react';
import '../styles/Footer.css';
import Greenhouse from '../images/greenhouse_sml.png';
import Facebook from '../images/facebook_sml.svg';
import Instagram from '../images/instagram_icon.svg';
import Twitter from '../images/twitter_sml.svg';

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
						<p className='signup-btn'>Sign Me Up!</p>
					</div>
				</div>
				{/* Bottom of Footer */}

				<div className='footer-bottom'>
					<div className='subscribe'>
						<p className='txt-3'>
							Sign up for our newsletter to stay in touch.
						</p>
						<input className='email' type='text' placeholder='Email' />

						<button className='subscribe-btn'>Subscribe</button>

						<p className='txt-4'>
							By clicking above you agree to our{' '}
							<span className='terms-of-use'>Terms of Use</span> and consent to
							receive email notifications about Smart Acres. You may unsubscribe
							at any time.
						</p>

						<p className='copyright'>
							&copy; 2020 Smart Acres all rights reserved.
						</p>
					</div>
					<div className='media'>
						<div className='logo'>Smart Acres</div>
						<div className='media-links'>
							<img src={Facebook} alt='' className='facebook' />
							<img src={Instagram} alt='' className='instagram' />
							<img src={Twitter} alt='' className='twitter' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
