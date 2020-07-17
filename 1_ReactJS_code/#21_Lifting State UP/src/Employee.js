import React ,{Component} from 'react'
import Department from "./Department";
import Salary from "./Salary";
import {Form, Button,Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";





class Employee extends  Component{
    constructor(props){
        super(props);

        this.state={
            name:"Sahil",
            WorkingDays:26,
            WorkingHours:8,
            chargeperHour:10,
            totalSalary:''
        }
    }

    NameHandler =(e) =>{
        this.setState({name:e.target.value});

    }

    WorkingDaysHandler =(e) =>{
        this.setState({WorkingDays:e.target.value});

    }

    WorkingHoursHandler =(e) =>{
        this.setState({WorkingHours:e.target.value});

    }

    chargeperHourHandler =(e) =>{
        this.setState({chargeperHour:e.target.value});

    }
    render(){
    return(
        <Container>
        <h1>Employee Details</h1>
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Enter Employee Name</Form.Label>
                <Form.Control type="text"  value ={this.state.name} placeholder="Enter Name"  
                onChange={this.NameHandler}/>
                
            </Form.Group>

            <Form.Group controlId="formBasicWorkingDays">
                <Form.Label>Total Number Of Working Days</Form.Label>
                <Form.Control type="text" value ={this.state.WorkingDays} placeholder="Enter Total Working days" 
                    onChange={this.WorkingDaysHandler}/>
            </Form.Group>

            <Form.Group controlId="formBasicWorkingHours">
                <Form.Label>Total Working Hours</Form.Label>
                <Form.Control type="text" value ={this.state.WorkingHours} placeholder="Enter Total Working Hours" 
                    onChange={this.WorkingHoursHandler} />
            </Form.Group>

            <Form.Group controlId="formBasicChargeperHour">
                <Form.Label>Charge  perHour</Form.Label>
                <Form.Control type="text" value ={this.state.chargeperHour} placeholder="Enter Charge per  Hours"
                onChange={this.chargeperHourHandler} />
            </Form.Group>


            
        </Form>
       
        <Department name={this.state.name}
         WorkingDays={this.state.WorkingDays} WorkingHours={this.state.WorkingHours} />
        
        <Salary name={this.state.name} 
        WorkingDays={this.state.WorkingDays} WorkingHours={this.state.WorkingHours}
        chargeperHour={this.state.chargeperHour} />
    <Container>
        <Button variant="secondary" type="refresh">
                Refresh
            </Button>
            </Container>
        </Container>
    );
}
}
export default Employee;