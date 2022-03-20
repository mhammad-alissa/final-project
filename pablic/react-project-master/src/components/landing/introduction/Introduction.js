import React, { Component } from 'react';
import IntroItem from './IntroItem';

export class Introduction extends Component {
  render() {
    return (
    	<div className="intro">
		<div className="container">
			<div className="row">
				<div className="col">
					<h1 className="intro_title text-center">We have the best services</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-10 offset-lg-1">
					<div className="intro_text text-center">
						<p>Convenient service at an affordable price</p>
					</div>
				</div>
			</div>
			<div className="row intro_items">

				{/* <!-- Intro Item --> */}
				<IntroItem categories={this.props.categories} />
		
			</div>
		</div>
	</div>
    );
  }
}

export default Introduction;
