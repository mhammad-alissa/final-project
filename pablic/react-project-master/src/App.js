import React from 'react';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sign from './components/signup/Sign';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import ExpenseTracker from './components/ExpenseTracker';
import Footer from './components/Footer/Footer';

function App() {
  return (  
  <BrowserRouter>
    {/*  <div className="App"> */}
      <header >
       {/* <Sign/> */}
  <Navbar>
  </Navbar>
  {/* <ExpenseTracker></ExpenseTracker> */}
      </header>
     {/* </div> */}


  
    <Routes>
      <Route path="/todolist" element={<Todo/>}>
     
        {/* <Route index element={<div className="container">
          <Form ClearLocal={this.ClearLocal} InputHandler = {this.InputHandler} info = {this.state.person} FormHandler={this.FormHandler} />
        </div>} />
        <Route path="todo" element={<Todo />} />
        <Route path="expense-tracker" element={<Expense />} /> 
      
        {/* <Route path="*" element={<Nopage />} />*/}
         
          </Route>  <Route path="/ExpenseTracker" element={<ExpenseTracker/>}></Route>
      </Routes>
      <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
