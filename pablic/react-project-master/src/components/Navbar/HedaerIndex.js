import React, { Component } from 'react';
import Slider from './Slider';
class HedaerIndex extends Component {
 show = "block" ;

  render() {
		if(!(window.location.href.endsWith("/")))
		{
			this.show = "none"
		}
		else {
			this.show = "block"
		}
    return (
		// <!-- Home -->
		<>
		
			
	<div id="home-landing" className="home-landing" style={{display : this.show}} >
		
		{/* <!-- Home Slider --> */}

		<div className="home_slider_container">
			
			<div className="owl-carousel owl-theme home_slider">

				{/* <!-- Slider Item --> */}
					<Slider src={"images/back.jpg"} />
					{/* <Slider src={"images/petra2.webp"} />
					<Slider src={"images/Ajluin.webp"} /> */}

			</div>
			
			{/* <!-- Home Slider Nav - Prev --> */}
		 <div className="home_slider_nav home_slider_prev">
				<svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
					<defs>
						<linearGradient id='home_grad_prev'>
							<stop offset='0%' stopColor='#fa9e1b'/>
							<stop offset='100%' stopColor='#8d4fff'/>
						</linearGradient>
					</defs>
					<path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
					M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
					C22.545,2,26,5.541,26,9.909V23.091z"/>
					<polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
					11.042,18.219 "/>
				</svg>
			</div> 
			
			{/* <!-- Home Slider Nav - Next --> */}
			 <div className="home_slider_nav home_slider_next">
				<svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
					<defs>
						<linearGradient id='home_grad_next'>
							<stop offset='0%' stopColor='#fa9e1b'/>
							<stop offset='100%' stopColor='#8d4fff'/>
						</linearGradient>
					</defs>
				<path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
				M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
				C22.545,2,26,5.541,26,9.909V23.091z"/>
				<polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
				17.046,15.554 "/>
				</svg>
			</div> 

			{/* <!-- Home Slider Dots --> */}

			<div className="home_slider_dots">
				{/* <ul id="home_slider_custom_dots" className="home_slider_custom_dots">
					<li className="home_slider_custom_dot active"><div></div>01.</li>
					<li className="home_slider_custom_dot"><div></div>02.</li>
					<li className="home_slider_custom_dot"><div></div>03.</li>
				</ul> */}
			</div>
			
		</div>
		 </div>

</>
    );
  }
}
export default HedaerIndex;
