import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

export class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategory: [],
    };
  }

  componentDidMount() {
    const url = "http://localhost/final-project/php/subcategory.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ subcategory: data });
        console.log(this.state.subcategory);
      });
  }
  service = (id) => {
    console.log(id);
    localStorage.setItem("service", id);
  };
  render() {
    // console.log(this.state.subcategory);
    var id = JSON.parse(localStorage.getItem("subCategory"));
    return (
      <>
        {this.state.subcategory
          .filter((ele) => {
            return ele.category_id === `${id}`;
          })
          .map((subcategory) => {
            return (
              <div key={subcategory.id} className="col-lg-6 offers_col">
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        {/* <!-- Image by https://unsplash.com/@kensuarez --> */}
                        <Link
                          onClick={(id) => this.service(subcategory.id)}
                          to="/service"
                        >
                          <div
                            className="offers_image_background"
                            style={{
                              backgroundImage: `url(http://127.0.0.1:8000/black/img/${subcategory.p_image})`,
                            }}
                          ></div>
                        </Link>
                        <div className="offer_name">
                          <Link
                            onClick={(id) => this.service(subcategory.id)}
                            to="/service"
                          >
                            {subcategory.p_name}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        {/* <div className="offers_price">
                          {subcategory.category_id == 3 ||
                          subcategory.category_id == 6
                            ? ""
                            : `${subcategory.price}$`}
                          <span>
                            {subcategory.category_id == 1 ? "Per Km" : ""}
                          </span>
                          <span>
                            {subcategory.category_id == 2 ||
                            subcategory.category_id == 5
                              ? "Per Night"
                              : ""}
                          </span>
                        </div> */}
                        {/* <div>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div> */}
                        <p className="offers_text">{subcategory.p_description}</p>
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
                            onClick={(id) => this.service(subcategory.id)}
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
          })}
        <Outlet />
      </>
    );
  }
}

export default CategoryItem;
