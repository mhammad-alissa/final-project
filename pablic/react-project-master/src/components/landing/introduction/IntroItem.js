import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

export class IntroItem extends Component {
  subCat = (id, name) => {
    localStorage.setItem("subCategory", id);
    localStorage.setItem("subCategoryName", name);
    // window.onload();
  };
  render() {
    return (
      <>
        {this.props.categories.map((category) => {
          return (
            <div key={category.id} className="col-lg-4 mb-3 intro_col">
              <div className="intro_item">
                <div className="intro_item_overlay"></div>
                <div
                  className="intro_item_background"
                  style={{
                    // backgroundImage: `url(../../../../../../../../admin/public/black/img${category.image})`,
                    backgroundImage: `url(http://127.0.0.1:8000/black/img/${category.image})`,
                  }}
                ></div>
                <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                  {/* <div className="intro_date">May 25th - June 01st</div> */}
                  <div className="button intro_button">
                    <div className="button_bcg"></div>
                    <Link
                      aria-label="more items about this product,services"
                      onClick={(id, name) =>
                        this.subCat(category.id, category.name)
                      }
                      to="/Subcategory"
                    >
                      see more<span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </div>
                  <div className="intro_center text-center">
                    <h1>{category.name}</h1>
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

export default IntroItem;
