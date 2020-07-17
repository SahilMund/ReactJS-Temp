import React from 'react';
import {MyContext} from "./Conetxt";
 

class Salary extends React.Component{

  render(){
    return(
      <>
      <h1>Salary Component</h1>
      <MyContext.Consumer>
      {({salary,clickChange}) => <>
      <h2>Salary :{salary} </h2>
      <button onClick={clickChange}>Change Salary</button>
      </>}

      </MyContext.Consumer>
      
      </>

    );
  }
}

export default Salary;
