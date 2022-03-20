import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Slider extends Component {

  locationHandler2 = (e) => {
	  window.onload()
  };

  render() {
    return (
		<>
        			<div className="owl-item home_slider_item">
					<div className="home_slider_background" style={{ backgroundImage:`url(${this.props.src})` }}></div>

					<div className="home_slider_content text-center">
						<div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
							<h1>discover</h1>
							<h1>JORDAN</h1> 
							<div style={{color: "white", cursor:"pointer"}} className="button home_slider_button"><div className="button_bcg"></div><Link to="/category" onClick={(e) => this.locationHandler2(e)}>explore now<span></span><span></span><span></span></Link></div>
						</div>
					</div>
				</div>
				</>
    );
  }
}

export default Slider;
