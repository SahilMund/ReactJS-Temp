import React ,{Component} from "react";


class EmployeeB extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"Mund",
            empid:102
        }
        console.log("Employee B Constructor");

    }

    UNSAFE_componentWillMount(){
        console.log(" Employee B Component Will Mount");
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
