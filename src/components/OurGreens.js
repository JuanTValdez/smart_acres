import React from 'react';
import '../styles/OurGreens.css';
import Sprouts from '../images/lettucesprout_sml.png';
import Seeds from '../images/lettuceseed_lrg.png';
import LettucePhone from '../images/lettucephone_med.png';
import BeetSalad from '../images/beetsalad_med.png';

const greens = [
	{ img: Sprouts, text: '365 Days a Year' },
	{ img: Seeds, text: 'Hyper-Local Sustainable' },
	{ img: LettucePhone, text: 'Healthy, Ultra High Quality' },
	{ img: BeetSalad, text: 'Long-Term Economical' },
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
				{greens.map((green) => {
					return (
						<div className='grid-item'>
							<div className='image-container'>
								<img src={green.img} alt='' />
							</div>

							<div className='txt-1'>{green.text}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
