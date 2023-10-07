import React from 'react';
import '../styles/OurGreens.css';
import Sprouts from '../images/lettucesprout_sml.png';
import Seeds from '../images/lettuceseed_lrg.png';
import LettucePhone from '../images/lettucephone_med.png';
import BeetSalad from '../images/beetsalad_med.png';
import CloverLettuce from '../images/cloverlettuce_sml.png';
import LettuceHead from '../images/lettucemulti_sml.png';

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
				{greens.map((green, key) => {
					return (
						console.log('Key ' + key),
						(
							<div key={key} className='grid-item'>
								<div className='image-container'>
									<img src={green.img} alt='' />
								</div>

								<div className='txt-1'>{green.text}</div>
							</div>
						)
					);
				})}
			</div>

			<div className='grid-col-10'>
				<div className='eat-local'>
					<p>Eating local means supporting your community.</p>
				</div>
				<div className='clover-lettuce'>
					<img src={CloverLettuce} alt='' />
				</div>
			</div>
			<p className='communities-txt'>
				Our lettuce would be nothing without the communities that we serve.
			</p>
			<div className='grid-col-10'>
				<div className='lettuce-head'>
					<img src={LettuceHead} alt='' />
				</div>

				<p className='challenge-txt'>
					These are certainly challenging times, and we’re proud that our greens
					can be used to feed front-line essential healthcare teams. We
					appreciate all that you do. Thank you!
				</p>
			</div>
		</div>
	);
}
