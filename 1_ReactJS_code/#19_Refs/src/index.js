import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

class Employee extends Component{

  render(){
    return(
      <>
      <App/>
      <center>
      
      </center>
      </>
    );
  }
}
ReactDOM.render(<Employee/>,
  document.getElementById('root')
);

