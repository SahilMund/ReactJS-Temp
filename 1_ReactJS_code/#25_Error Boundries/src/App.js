import React,{Component} from 'react';
import Employee from "./Employee";
import Widget from "./widget";
import logo from "./doms.png";
import Error from "./errorBoundries";

class App extends Component{
  render(){
    return(
      <>
      <h1>App component</h1>
      
      <Error>
      <Employee/>
      </Error>

      <Error>
      <Widget propic=""/>
      </Error>

      </>
    )
  }
}

export default App;