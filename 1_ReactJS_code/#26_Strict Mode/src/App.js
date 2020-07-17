import React,{Component} from 'react';
import Employee from "./Employee";
class App extends Component{

  render(){
    return(
      <>
      <React.StrictMode>
      <h1>App Component</h1>
      <Employee/>
      </React.StrictMode>
      </>
    )
  }
}

export default App;
