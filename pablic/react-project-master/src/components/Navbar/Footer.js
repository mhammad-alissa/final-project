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
      <footer className="footer">
		<div className="container">
			<div className="row">

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_content footer_about">
							<div className="logo_container footer_logo">
								<div className="logo"><Link to="/"><img src="images/logo.png" alt=""/>shqtuk</Link></div>
							</div>
							<p className="footer_about_text">shqtuk, is an exclusive travel and lifestyle service, founded by Mashi Group 2022. Since its inception, it has encapsulated a simple idea: exceptional personal service at an unsurpassed level. </p>
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
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">News</div>
						<div className="footer_content footer_blog">
							
							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="images/footer_blog_1.jpg" alt="https://unsplash.com/@avidenov"/></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/">Travel with us this year</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>
							
							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="images/footer_blog_2.jpg" alt="https://unsplash.com/@deannaritchie"/></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/">New destinations for you</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="images/footer_blog_3.jpg" alt="https://unsplash.com/@bergeryap87"/></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/">Travel with us this year</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">Links</div>
						<div className="footer_content footer_tags">
							<ul className="tags_list clearfix">
								<li className="tag_item"><Link to="/" onClick={(e) => this.locationHandler(e)}>Home</Link></li>
								<li className="tag_item"><Link to="/category" onClick={(e) => this.locationHandler(e)}>Services</Link></li>
								<li className="tag_item"><Link to="/about" onClick={(e) => this.locationHandler(e)}	>About US</Link></li>
								<li className="tag_item"><Link to="/contact">Contact Us</Link></li>
								<li className="tag_item"><Link to="/weather">Weather</Link></li>
							</ul>
						</div>
					</div>
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
									<div className="contact_info_text"><Link to="mailto:pr@travelix.com?Subject=Hello">pr@travelix.com</Link></div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/planet-earth.svg" alt=""/></div></div>
									<div className="contact_info_text"><Link to="/">www.shqtuk.com</Link></div>
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
