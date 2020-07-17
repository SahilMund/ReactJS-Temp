import React ,{Component} from "react";
import ReactDOM from "react-dom";
import EmployeeB from './EmpB';

class EmployeeA extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"Sahil" 
        }
        console.log(" employee A  Constructor is _calling..");

    }



    componentDidMount(){
        console.log(" employee A Component Did Mount is calling");
       
    }

    //static keyword ie required before getDrivedStateFromProps
   static getDerivedStateFromProps(prop,state){
    console.log("Employee A getDrivedStateFromProps calling..");
    return null;
    }

    
     
render(){

    console.log("Employee A Rendering");
    return (
        <>
        <h1>Hello Employee A</h1>
       <EmployeeB/>
        </>
    );
}

}

ReactDOM.render(<EmployeeA/>, document.getElementById("root"));