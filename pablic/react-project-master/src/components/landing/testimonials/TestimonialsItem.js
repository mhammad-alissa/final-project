import React, { Component } from 'react';

export class TestimonialsItem extends Component {
  render() {
    return (
    							<div className="owl-item">
								<div className="test_item">
									<div className="test_image"><img src={this.props.image_src} alt="person"/></div>
									<div className="test_icon"><img src="images/backpack.png" alt=""/></div>
									<div className="test_content_container">
										<div className="test_content">
											<div className="test_item_info">
												<div className="test_name">Adham Alnablsi</div>
												<div className="test_date">May 24, 2017</div>
											</div>
											<div className="test_quote_title">" Best holliday ever "</div>
											<p className="test_quote_text">Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
										</div>
									</div>
								</div>
							</div>
        );
  }
}

export default TestimonialsItem;
