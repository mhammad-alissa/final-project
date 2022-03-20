import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ServiceItem extends Component {
  service = (id) => {
    console.log(id);
    localStorage.setItem("service", id);
  };
  render() {
    return (
      // {/* <!-- Offers Item --> */}
      <div className="col-lg-6 offers_col">
        <div className="offers_item">
          <div className="row">
            <div className="col-lg-6" style={{ minHeight: "50px" }}>
              <div className="offers_image_container">
                <Link
                  onClick={(id) => this.service(this.props.id)}
                  to="/service"
                >
                  <div
                    className="offers_image_background"
                    style={{
                      backgroundImage: `url(servicesImages/${this.props.image})`,
                    }}
                  ></div>
                </Link>
                <div className="offer_name">
                  <Link
                    onClick={(id) => this.service(this.props.id)}
                    to="/service"
                  >
                    {this.props.name}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="offers_content">
                <div className="offers_price">
                  {this.props.price}$<span>per night</span>
                </div>
                <div className="">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="offers_text">{this.props.description}</p>
                <div className="offers_icons">
                  <ul className="offers_icons_list">
                    <li className="offers_icons_item">
                      <img src="images/post.png" alt="" />
                    </li>
                    <li className="offers_icons_item">
                      <img src="images/compass.png" alt="" />
                    </li>
                    <li className="offers_icons_item">
                      <img src="images/bicycle.png" alt="" />
                    </li>
                    <li className="offers_icons_item">
                      <img src="images/sailboat.png" alt="" />
                    </li>
                  </ul>
                </div>
                <div className="offers_link">
                  <Link
                    onClick={(id) => this.service(this.props.id)}
                    to="/service"
                  >
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceItem;
