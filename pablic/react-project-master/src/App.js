
import React, { Component } from 'react'
import "./App.css";
import "./main_styles.css";
import "./responsive.css";

import Navbar from './components/Navbar/Navbar';
import Subcategory from './components/offers/subcategory';
import Sign from './components/signup/Sign';
import Login from './components/login/Login';
import Footer from './components/Footer/Footer';
import Service from './components/service/Service';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from "axios";
import Landing from './components/landing/Landing';
import Category from './components/category/Category';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      // services: []
    };
  }



  componentDidMount() {
    // axios.get("http://localhost/project-react1/services.php").then((res) => {
    //   this.setState({
    //     services: res.data,
    //   });
    // });
    axios.get("http://localhost/final-project/php/category.php").then((res) => {
        this.setState({
          categories: res.data,
        });
      });
   
  }
  render() {
    
    return (
      <BrowserRouter>
     
  <Navbar />
 
    <Routes>
       <Route >
       <Route index
                element={
                  <Landing
                    categories={this.state.categories}
                    // services={this.state.services}
                  />
                }
              />  
              <Route path="/category" element={<Category categories={this.state.categories}   />} />
       <Route path="/signup" element={<Sign/>}></Route> 
       <Route path="/login" element={<Login />}></Route>
       <Route path="/Subcategory" element={<Subcategory />} />
       <Route path="/service" element={<Service/>}/>
       
        </Route> 
    </Routes>
   <Footer />
</BrowserRouter>
    )
  }
}

export default App;