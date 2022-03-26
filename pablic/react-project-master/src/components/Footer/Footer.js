import React, { Component } from 'react';
import { Outlet, Link} from "react-router-dom";


class Footer extends Component {

	state = {
    url: window.location.href,
  };

  locationHandler = (e) => {
    this.setState({
      url: e.target.href,
    });
  };

  render() {
    return (
        <>
      <footer className="footer" style={{backgroundColor:'rgb(25 34 81)'}}>
		<div className="container">
			<div className="row">

				{/* <!-- Footer Column --> */}
				<div className="col-lg-4 footer_column">
					<div className="footer_col">
						<div className="footer_content footer_about">
							<div className="logo_container footer_logo">
								<div className="logo"><Link to="/"><img src="images/logo.png" alt=""/>Smsark</Link></div>
							</div>
							<p className="footer_about_text">shqtuk,A site to display housing apartments and sell them very quickly, by marketing these apartments, with a very low commission. </p>
							<ul className="footer_social_list">
								<li className="footer_social_item"><Link to="//pinterest.com" target="_blank"><i className="fab fa-pinterest"></i></Link></li>
								<li className="footer_social_item"><Link to='//facebook.com' target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
								<li className="footer_social_item"><Link to="//twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link></li>
								<li className="footer_social_item"><Link to="//dribble.com" target="_blank"><i className="fab fa-dribbble"></i></Link></li>
								<li className="footer_social_item"><Link to="//behance.com" target="_blank"><i className="fab fa-behance"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-1 footer_column">
				
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">Links</div>
						<div className="footer_content footer_tags">
							<ul className="tags_list clearfix">
								<li className="tag_item"><Link to="/" onClick={(e) => this.locationHandler(e)}>Home</Link></li>
								<li className="tag_item"><Link to="/category" onClick={(e) => this.locationHandler(e)}>Services</Link></li>

							</ul>
						</div>
					</div>
				</div>

				<div className="col-lg-1 footer_column">
				
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">contact info</div>
						<div className="footer_content footer_contact">
							<ul className="contact_info_list">
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/placeholder.svg" alt=""/></div></div>
									<div className="contact_info_text">Al 'abdali, Amman, Jordanr</div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/phone-call.svg" alt=""/></div></div>
									<div className="contact_info_text">+962-777-777-777</div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/message.svg" alt=""/></div></div>
									<div className="contact_info_text"><Link to="mailto:pr@travelix.com?Subject=Hello">pr@Smsark.com</Link></div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/planet-earth.svg" alt=""/></div></div>
									<div className="contact_info_text"><Link to="/">www.Smsark.com</Link></div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</footer>
	 <Outlet />
	 </>
    );
  }
}

export default Footer;
