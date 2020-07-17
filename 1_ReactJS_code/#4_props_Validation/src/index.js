import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import prop from 'prop-types';

//Props Using class component 
class Employee extends Component{
  render(){
    return <Fragment>
    <h1>Welcome as Employee </h1>
    <h1>Hello {this.props.name}</h1>
    <h1>Your employee id is  : {this.props.empId}</h1>
  </Fragment>
  }
}

//for validation
Employee.propTypes = {
  name:prop.string.isRequired,
  empId:prop.number.isRequired
}

//  defining parent class props
Employee.defaultProps={
  name:"sammy boy",
  empId:100
}


//name="sahil" empId="032"
ReactDOM.render(<Employee/>,
  document.getElementById('root')
);

