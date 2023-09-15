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
					<img src={OakLeaf} alt='Oak Leafs' />
				</div>
				<div className='text-container'>
					<h1 className='text-1'> Oak Leaf</h1>
					<p className='text-2'>
						Vibrant leaves with a regal crown of serrated tips. The edges play
						into a soft texture that quickly venture into a crisp bite at the
						heart.
					</p>
				</div>

				{/* <div></div> */}
			</div>
		</div>
	);
}
