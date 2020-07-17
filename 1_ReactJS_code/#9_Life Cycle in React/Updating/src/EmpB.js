import React ,{Component} from "react";


class EmployeeB extends Component{

    constructor(props){
        super(props);
        this.state={
            empBID:this.props.empbid
        }
        console.log(" Employee B Constructor is calling..");

    }


   
   static getDerivedStateFromProps(prop,state){
    console.log("Employee B getDrivedStateFromProps");
    console.log(prop,state)
    if(prop.empbid !== state.empBID){
        return {empBID:prop.empbid}
    }
    return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(" Employee B shouldComponentUpdate is invoked");
        console.log(nextProps, nextState)
         
        return true;//if it doesn't returns true it will not invoke render()
    }
    

    // getSnapshotBeforeUpdate must used with componentDidUpdate
    
    getSnapshotBeforeUpdate(prevProps, prevState){
 
        console.log("getSnapshotBeforeUpdate is invoked");
        console.log(prevProps, prevState)
        return prevState;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate is invoked");
        console.log(prevProps, prevState,snapshot);
        }


  render(){

    console.log("Employee B Rendering");
    return (
        <>
        <h1>Hello Employee B</h1>
        <h2>Your Employee id : {this.state.empBID}</h2>
        </>
    );
}

}



export default EmployeeB;