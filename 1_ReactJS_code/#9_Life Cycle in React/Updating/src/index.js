import React ,{Component} from "react";
import ReactDOM from "react-dom";
import EmployeeB from './EmpB';

class EmployeeA extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"Sahil" ,
            empid:101
        }
        console.log(" employee A  Constructor is _calling..");

    }


    //static keyword ie required before getDrivedStateFromProps
   static getDerivedStateFromProps(prop,state){
    console.log("Employee A getDrivedStateFromProps calling..");
    
    return null;
    }

    updateEmpID=() =>{
        let emp_id=this.state.empid;

        this.setState({
            empid:emp_id+1
        })
    }
     
    render(){

    console.log("Employee A Rendering");
    return (
        <>
        <h1>Hello Employee A</h1>
        <h2>Your Employee id : {this.state.empid}</h2>
        <button onClick = {this.updateEmpID}>Update Employee A id</button>

       <EmployeeB empbid={this.state.empid}/>
        </>
    );
}

}

ReactDOM.render(<EmployeeA/>, document.getElementById("root"));