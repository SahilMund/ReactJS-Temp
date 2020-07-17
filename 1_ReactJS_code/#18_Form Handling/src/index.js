import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

class Employee extends Component{

  state={
    name:{},
      email:{},
      phone:{}
  }

  onSubmit=(val) =>{
    this.setState({name:val.name,email:val.email,phone:val.phone})
  }
  render(){
    return(
      <>
      <App onSubmit={this.onSubmit}/>
      <center>
      <h3>Name :{JSON.stringify(this.state.name)}</h3>
      <h3>email :{JSON.stringify(this.state.email)}</h3>
      <h3>phone No. :{JSON.stringify(this.state.phone)}</h3>
      </center>
      </>
    );
  }
}
ReactDOM.render(<Employee/>,
  document.getElementById('root')
);

