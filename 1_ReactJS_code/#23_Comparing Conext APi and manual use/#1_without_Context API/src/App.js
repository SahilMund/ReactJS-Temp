import React from 'react';
import Employee from "./Employee";

import './App.css';

class App extends React.Component{

  state={
    name:"sahil",
    department:"Programmer",
    salary:50000
  }

  render(){
    return(
      <>
      <h1>App Component</h1>
      <Employee salary={this.state.salary}/>
      </>

    );
  }
}

export default App;
