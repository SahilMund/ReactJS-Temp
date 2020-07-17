import React from 'react';
import Salary from "./Salary";

class Department extends React.Component{

  render(){
    return(
      <>
      <h1>Department Component</h1>
      <Salary salary={this.props.salary}/>
      </>

    );
  }
}

export default Department;
