import React from 'react';
import '../styles/OurGreens.css';
import Sprouts from '../images/lettuceseed_sml.png';

// create an array of four objects with the key values of img and text
const greens = [
	{ img: Sprouts, text: '365 Days a Year' },
	{ img: '', text: 'Hyper-Local Sustainable' },
	{ img: '', text: 'Healthy, Ultra High Quality' },
	{ img: '', text: 'Long-Term Economical' },
];
export default function OurGreens() {
	return (
		<div>
			<div className='our-greens'>
				<div className='our-greens-title'>
					<span>It's</span> in our Greens
				</div>

				<p className='our-greens-descriptor'>
					Innovated in Korea. Grown with care in the UAE. Gently harvested in
					Abu Dhabi.
				</p>
			</div>

			<div>
				<div className='images'>
					<img src={greens[0].img} alt='' />
				</div>

				<div className='txt-1'>{greens[0].text}</div>
			</div>
		</div>
	);
}
