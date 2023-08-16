import './App.css';
import Lettuceplate from './images/lettuceplate_sml.png';

function App() {
	return (
		<div className='App'>
			{/* <div className="section">
       
      <nav className="nav_bar"> 
          <div className="logo">

            Logo

          </div>
          <div className="nav_links ultra">

              <span className="nav_links ultra" >
                Green Team
              </span>
        
              <span className="nav_links ultra">
                Start Smart
              </span>

              <span className="nav_links ultra">

                Community
              </span>
          
              <span className="nav_links ultra">
                
                Contact Us

              </span>
            

          </div>

      </nav> 
      
    </div>  */}

			<div className='container_flex_rw'>
				<div className='image_1 ol_purple'>
					<img src={Lettuceplate} alt='' />
				</div>

				<div className='container_flex_col left_1 ol_green'>
					<span className='example_font'>Example Font 1</span>

					<span className='example_font'>Example Font 2</span>

					<span className='example_font'>Example Font 3</span>
				</div>
			</div>
		</div>
	);
}

export default App;
