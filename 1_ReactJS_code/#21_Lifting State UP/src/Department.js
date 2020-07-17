

import React ,{Component} from 'react'

class Department extends  Component{
render(){
    return(
        <>
        <h1>Department Details</h1>
        <h3>Employee Name : {this.props.name}</h3>
        <h3>Working Days : {this.props.WorkingDays}</h3>
        <h3>Working Hour : {this.props.WorkingHours}</h3>



        </>
    );
}
}
export default Department;