import React ,{Component} from "react";
import ReactDOM from "react-dom";

class EmployeeB extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"Mund"
        }
        console.log(" Employee B Constructor is calling..");

    }


    componentDidMount(){
        console.log("  Employee B Component Did Mount is calling");
       
    }

   static getDerivedStateFromProps(prop,state){
    console.log("Employee B getDrivedStateFromProps");
    return null;
    }

    
     
render(){

    console.log("Employee B Rendering");
    return (
        <>
        <h1>Hello Employee B</h1>
        </>
    );
}

}



export default EmployeeB;