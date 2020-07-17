import React, {Component} from "react";
import ReactDOM from "react-dom";
import logo from "./logo_src.png";

class Employee extends Component{

 render(){

  return(
    <>
    <h2>Inside Public Folder</h2>
   <img src={process.env.PUBLIC_URL+"logo_pub.png"} alt="logo"/>

   <h2>Inside src Folder</h2>
  <img src={logo} alt="logooo"/>
  
   
    </>
  );
 }
}

ReactDOM.render(<Employee/>, document.getElementById("root"));

