import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BForm from "./form";
import "bootstrap/dist/css/bootstrap.min.css";


class Employee extends Component{
  render(){
    return(
      <div className="container">
      <h1>Welcome User !</h1>
      <BForm/>
      </div>
    );
  }
}
ReactDOM.render(<Employee/>,
  document.getElementById('root')
);
