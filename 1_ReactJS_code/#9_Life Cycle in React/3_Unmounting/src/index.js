import React ,{Component} from "react";
import ReactDOM from "react-dom";
import EmployeeB from './EmpB';

class EmployeeA extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"Sahil",
            empid:101
        }
        console.log("Employee A Constructor");

    }

    UNSAFE_componentWillMount(){
        console.log(" Employee A Component Will Mount");
    }

    componentWillUnmount(){
        console.log(" Employee A Component Will Unmount");
    }
     
    render(){

    console.log("Employee A Rendering");
    return (
        <>
        <h1>Hello Employee A</h1>
       <h1>Name: {this.state.name}</h1>
       <h1>Your employee ID : {this.state.empid}</h1>
        </>
    );
}

}

ReactDOM.render(<EmployeeA/>, document.getElementById("rootA"));
ReactDOM.render(<EmployeeB/>, document.getElementById("rootB"));

//for unmounting of EMployee  A
ReactDOM.unmountComponentAtNode(document.getElementById("rootA"));
