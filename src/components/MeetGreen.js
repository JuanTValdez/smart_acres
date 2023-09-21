import React from 'react';
import '../styles/MeetGreen.css';
import OakLeaf from '../images/threelettuce_med.png';
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

				{/* <div></div> */}
			</div>
		</div>
	);
}
