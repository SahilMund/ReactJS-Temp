import React from 'react';


class Salary extends React.Component{

  render(){
    return(
      <>
      <h1>Department Component</h1>
      <h2>Salary :{this.props.salary} </h2>
      </>

    );
  }
}

export default Salary;
