import React from 'react';
import Lettuceplate from '../images/lettuceplate_sml.png';

export default function IntroSection() {
	return (
		<div>
			<div className='intro-grid'>
				<div className='intro-image'>
					<img src={Lettuceplate} alt='' />
				</div>

				<div className='intro-content'>
					<p className='intro-text-1'>
						We're growing the UAE's food system and the way you eat.
					</p>
					<p className='intro-text-2'>
						Our food system is in dire need of help and now's our chance to fix
						it.
					</p>
					<div className='intro-btn'>
						<p>Tell me more!</p>
					</div>
				</div>
			</div>
		</div>
	);
}
