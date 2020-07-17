import React,{Component} from 'react';

class Employee extends Component{
    render(){
        return(
            <>
            <h1 className={this.props.color}>Employee Details</h1>
            <h2>Name: {this.props.name}</h2>
            <h2>Employee id: {this.props.empid}</h2>
            
            </>
        );
    }
}
 
export default Employee;