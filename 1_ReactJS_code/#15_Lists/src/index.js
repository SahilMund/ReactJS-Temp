import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Employee extends Component{
  
  constructor(){
    super();

    this.state={
      users : [{id:1 ,name : "sahil"},{id:2 ,name : "sahil Mund"}]
    }
  }

  render(){
    
    
    const usersArr=this.state.users;
    //const propsArr = this.props.arr;
    ////const newArr=arr.map(callback(newvalue,index),arr)
    // const newArr=arr.map( (val,index) =>{
    //    return  <li>{val}</li>
    // })
    // console.log(arr,newArr)

    const newArr=usersArr.map( (val,index) =>{
      //return  <li id={val.id}>{val.name}</li>
      return <li key={val.id}>{val.name}</li>
   })
    return(
      <>
      <h1>Lists in React</h1>
     <ul> {newArr}</ul>
      </>
    );
  }
}

//const arr=[1,2,3,4];
ReactDOM.render(<Employee/>,
  document.getElementById('root')
);
