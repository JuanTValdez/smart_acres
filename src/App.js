import './App.css';
import Lettuceplate from './images/lettuceplate_sml.png';

function App() {
	return (
		<div className='App'>
			{/* <nav className='nav_bar'>
				<div className='logo'>Logo</div>
				<div className='nav_links ultra'>
					<span className='nav_links ultra'>Green Team</span>

					<span className='nav_links ultra'>Start Smart</span>

					<span className='nav_links ultra'>Community</span>

					<span className='nav_links ultra'>Contact Us</span>
				</div>
			</nav> */}

			{/* <div className='container  ol_yellow'>
				<div className='container_1 ol_green'>
					<img src={Lettuceplate} alt='' />
				</div>

				<div className='container_2 contain_flex_col '>
					<div className='txt_1'>
						We're growing the UAE's food system and the way you eat.
					</div>
					<div className='txt_2'>
						Our food system is in dire need of help and now’s our chance to fix
						it.
					</div>
					<div className='btn_1'>Tell Me More!</div>
				</div>
			</div> */}

			<div className='intro-grid ol_green'>
				<div className='intro-image ol_orange'>
					<img src={Lettuceplate} alt='' />
				</div>

				<div className='intro-content ol_orange ol_cyan'>
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

export default App;
