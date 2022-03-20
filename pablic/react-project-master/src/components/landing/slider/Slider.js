import React, { Component } from 'react';
import Youtube from '../youtube/Youtube';

export class Slider extends Component {
  render() {
    return (


		<div className='intro intro-youtube'>
			<div className="container">
				<Youtube videoId={"vVjz8LcOrEU"}/>
			</div>
		</div>
   
        );
  }
}

export default Slider;
