import React, { Component } from "react";
import ServiceItem from "./ServiceItem";

export class Services extends Component {
  render() {
    const services = this.props.services.filter((service) => {
      return service.category_name === "Hotels";
    });

    return (
      <div className="offers">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section_title section_h2_offers">the best offers with rooms</h2>
            </div>
          </div>
          <div className="row offers_items">
            {services.map((service) => {
              return (
                <ServiceItem
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  image={service.image}
                  description={service.description}
                  price={service.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
