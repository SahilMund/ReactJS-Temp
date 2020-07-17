import React,{Component} from 'react';

class Employee extends Component{

    UNSAFE_componentWillMount(){
        console.log("Employee Component Console")
    }

  render(){
    return(
      <>
      <h1>Employee Component</h1>
      </>
    )
  }
}

export default Employee;
