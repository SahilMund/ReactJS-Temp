import React from 'react';
import Department from "./Department";


class Employee extends React.Component{

  render(){
    return(
      <>
      <h1>Employee Component</h1>
      <Department/>
      </>

    );
  }
}

export default Employee;
