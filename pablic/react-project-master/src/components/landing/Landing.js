import React, { Component } from 'react';
import Introduction from './introduction/Introduction';
// import Services from './services/Services';
import Testimonials from './testimonials/Testimonials';
import Slider from '../Navbar/Slider'
import HedaerIndex from '../Navbar/HedaerIndex'
import Contact from './contact/Contact';
import { Search } from '../Navbar/Search';

export class Landing extends Component {

// componentDidMount(){
//       document.getElementById("home-landing").style.display = "block"
//       this.props.ScrollUp();
// }

  render() {   
    return (
        <> 
        <HedaerIndex />
            <Search  categories={this.props.categories} services={this.props.services} />
            <Introduction categories={this.props.categories} />
           
            {/* <Services services={this.props.services} /> */}
            <Testimonials />
            <Contact />
        </>
    );
  }
}

export default Landing;
