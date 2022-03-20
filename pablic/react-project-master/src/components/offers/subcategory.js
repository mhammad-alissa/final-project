import React, { Component } from "react";
import CategoryItem from "./CategoryItem";

class Subcategory extends Component {
  // componentDidMount() {
  //   document.getElementById("home-landing").style.display = "none";
  // }

  render() {
  
    return (
      <>
        <div className="home">
          <img
            className="home_background parallax-window"
            data-parallax="scroll"
            src="images/services3.jpg"
            alt="user profile"
          />
          <div className="home_content">
            <div className="home_title">
              {localStorage.getItem("subCategoryName")}
            </div>
          </div>
        </div>
        {/* // <!-- Offers --> */}

        <div className="offers">
          <div className="container">
            <div className="row">
              <div className="col text-center"></div>
            </div>
            <div className="row offers_items">
              <CategoryItem subcategory={this.props.subcategory} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Subcategory;
