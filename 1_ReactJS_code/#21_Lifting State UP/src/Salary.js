

import React ,{Component} from 'react'

class Salary extends  Component{

render(){
    return(
        <>
        <h1>Salary Details</h1>
        <h3>Employee Name : {this.props.name}</h3>
    <h3> Total Hours : {this.props.WorkingDays * this.props.WorkingHours}</h3>
        <h3>Charge per Hour : {this.props.chargeperHour}</h3>
        <h3>Total Salary : {this.props.chargeperHour *
         this.props.WorkingDays * this.props.WorkingHours}</h3>





        </>
    );
}
}
export default Salary;