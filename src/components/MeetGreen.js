import React from 'react';
import '../styles/MeetGreen.css';
import OakLeaf from '../images/threelettuce_lrg.png';
// import TomatoLettuce from '../images/tomatosalad_med.png';
export default function MeetGreen() {
	return (
		<div>
			<div className='grid-template'>
				<div className='column-spread'>
					<p className='title-phrase'>
						<span>Gro</span>wing beyond the status quo
					</p>
					<div className='meetTeam'>Meet the Green Team</div>
				</div>

				<div className='oak-img'>
					<img src={OakLeaf} alt='' />
				</div>
				<div className='text-container'>
					<h1 className='text-1'> Oak Leaf</h1>
					<p className='text-2'>
						Everyone’s favorite in a variety of salads, this beautiful bouquet
						of greenery mimics the leaves of an oak tree with elegant folds and
						round tips.
					</p>
				</div>

				<div className='ultra-txt'>
					<p>
						Our ultra high-quality greens mean more on your plate and less in
						the bin.
					</p>
					<div className='interested-txt'>
						<p>
							If you're interested to see how and would love a chance to receive
							a complimentary care package of our amazing lettuces, drop us a
							message and say hi!
						</p>

						<div className='free-lettuce-btn'>
							<p className='free-btn'>Free Lettuce, Please!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
