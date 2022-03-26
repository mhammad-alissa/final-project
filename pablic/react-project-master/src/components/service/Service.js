import React, { Component } from "react";
import "./single_listing_styles.css";
import "./single_listing_responsive.css";


import axios from "axios";


import { Link } from "react-router-dom";
import Booking from "./Booking";
export class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategory: [],
    };
  }

  componentDidMount() {
    
    const url = "http://localhost/final-project/php/service.php";
    axios.get(url)
      .then((response) => response.data)
      .then((data) => {
        
        this.setState({ subcategory: data });
      });

  }


  render() {
    var id = JSON.parse(localStorage.getItem("service"));
    console.log(this.state.subcategory);
    return (
      <section>
        {/* <!-- Home --> */}



        {/* <!-- Offers --> */}

        <div className="listing" >
          {/* <!-- Search --> */}

          {/* <!-- Single Listing --> */}

          <div className="container" >
            <div className="row">
              <div className="col-lg-8">
                {this.state.subcategory
                  .filter((ele) => {
                    return ele.id === `${id}`;
                  })
                  .map((service) => {
                    const obj = {
                      p_id: service.id,
                      p_name: service.p_name,
                      p_image: service.p_image,
      
                    };
          localStorage.setItem("products", JSON.stringify(obj));
                   
                    return (
                      <div key={service.id} className="single_listing" style={{marginTop:'150px'}}> 
                        {/* <!-- Hotel Info --> */}
                        <div className="hotel_info">
                          {/* <!-- Title --> */}
                          <div className="hotel_title_container d-flex flex-lg-row flex-column">
                            <div className="hotel_title_content">
                              <h1 className="hotel_title">{service.p_name}</h1>
                              <div className="hotel_location">{service.p_location}</div>
                            </div>
                            <div className="hotel_title_button ml-lg-auto text-lg-right">
                    
                            </div>
                          </div>

                          {/* <!-- Listing Image --> */}

                          <div className="hotel_image">
                            <img
                              src={`http://127.0.0.1:8000/black/img/${service.p_image}`}
                              alt=""
                            />

                            {/* <div className="hotel_review_container d-flex flex-column align-items-center justify-content-center"> */}
                              {/* <div className="hotel_review"> */}
                                {/* <div className="hotel_review_content">
                                  <div className="hotel_review_title">
                                    very good
                                  </div>
                                  <div className="hotel_review_subtitle">
                                    100 reviews
                                  </div>
                                </div> */}
                                {/* <div className="hotel_review_rating text-center">
                                  8.1
                                </div> */}
                              {/* </div> */}
                            {/* </div> */}
                          </div>
                          <div>
                            <img
                              onClick={() =>
                                window.open(
                                  `http://127.0.0.1:8000/black/img/${service.p_sup_image1}`,
                                  "_blank"
                                )
                              }
                              src={`http://127.0.0.1:8000/black/img/${service.p_sup_image1}`}
                              alt="https://unsplash.com/@grovemade"
                              style={{
                                marginTop: "40px",
                                cursor: "pointer",
                                width: "120px",
                                height: "70px",
                                marginRight: "20px",
                              }}
                            />
                            <img
                              onClick={() =>
                                window.open(
                                  `http://127.0.0.1:8000/black/img/${service.p_sup_image2}`,
                                  "_blank"
                                )
                              }
                              src={`http://127.0.0.1:8000/black/img/${service.p_sup_image2}`}
                              alt="https://unsplash.com/@grovemade"
                              style={{
                                marginTop: "40px",
                                cursor: "pointer",
                                width: "120px",
                                height: "70px",
                              }}
                            />
                          </div>
                          {/* <!-- Hotel Gallery --> */}

                          {/* <!-- Hotel Info Tags --> */}
                          <div className="hotel_info_text">
                            <p>{service.p_description}</p>
                          </div>
                        </div>
                        {/* <!-- Reviews --> */}
                      </div>
                    );
                  })}
              </div>

          

<Booking></Booking>


            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
