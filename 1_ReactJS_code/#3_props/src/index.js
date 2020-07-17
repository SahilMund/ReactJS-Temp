import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Parent extends Component{
  render(){
    return <div>
    <h1>Welcome as Parent </h1>
    <h1>Hello parent {this.props.pname}</h1>
    <h1>Your parent employee id is  : {this.props.pempId}</h1>
    <hr></hr>
    <Child cname="Sahistra" cempId="000"/>
  </div>
  }
}

class Child extends Component{
  render(){
    return <div>
    <h1>Welcome as Child </h1>
    <h1>Hello  child {this.props.cname}</h1>
    <h1>Your child employee id is  : {this.props.cempId}</h1>
    <br></br>
    
  </div>
  }
}
 //  defining parent class props
Parent.defaultProps={
  pname:"sammy boy",
  pempId:"100"
}


//name="sahil" empId="032"
ReactDOM.render(<Parent />,
  document.getElementById('root')
);

/*
//Props Using class component 
class Employee extends Component{
  render(){
    return <div>
    <h1>Welcome as Employee </h1>
    <h1>Hello {this.props.name}</h1>
    <h1>Your employee id is  : {this.props.empId}</h1>
  </div>
  }
}
*/

/*
//Props Using Function component 

const Employee =(props) =>{
  return <div>
    <h1>Welcome as Employee </h1>
    <h1>Hello {props.name}</h1>
<h1>Your employee id  is  : {props.empId}</h1>
  </div>
}
*/
