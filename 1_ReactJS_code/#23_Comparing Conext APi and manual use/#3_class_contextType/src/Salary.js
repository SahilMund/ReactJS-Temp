import React from 'react';
import {MyContext} from "./Conetxt";
 

class Salary extends React.Component{

  static contextType = MyContext;


  render(){
    console.log(this.context)
    //Destructuring of data
    const{name,salary,clickChange}=this.context;

    return(
      <>
      <h1>Salary Component</h1>
      <h2>Name :{name} </h2>
      <h2>Salary :{salary} </h2>
      <button onClick={clickChange}>Change Salary</button>

      </>

    );
  }
}

export default Salary;
