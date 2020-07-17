import React from 'react';
import Employee from "./Employee";
import {MyContext} from "./Conetxt";

import './App.css';



class App extends React.Component{

  state={
    name:"sahil",
    department:"Programmer",
    salary:50000
  }

  changeHandler =() =>{
    this.setState({salary:this.state.salary+5000});
  }
  render(){

    //Structuring of data
    const vals={
      name:this.state.name,
      salary:this.state.salary,
      clickChange:this.changeHandler
    }
    return(
      <>
      <h1>App Component</h1>
      <MyContext.Provider value={vals}>
      <Employee />
      </MyContext.Provider>
      </>

    );
  }
}

export default App;
