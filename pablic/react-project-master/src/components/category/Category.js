import React, { Component } from "react";
import IntroItem from "../landing/introduction/IntroItem";


export class Category extends Component {

  componentDidMount() {
    // document.getElementById("home-landing").style.display = "none";
  }

  render() {
        // this.props.ScrollUp()
    return (
      <>
        <div className="home">
          <div
            className="home_background parallax-window"
            data-parallax="scroll"
            style={{ backgroundImage: `url(images/elements_background.jpg)` }}
          ></div>
          <div className="home_content">
            <div className="home_title">Categories</div>
          </div>
        </div>
        <div className="offers">
          <div className="container">
            <div className="row offers_items">
              <IntroItem categories={this.props.categories} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Category;
