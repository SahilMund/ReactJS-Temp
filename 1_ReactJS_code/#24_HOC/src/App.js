import React from 'react';
import Bjp from "./bjp";
import Bjd from "./bjd";



class App extends React.Component{

  render(){
    return(
      <>
      <h1>Higher Order Component</h1>
      <Bjp candidate ="Narendra Modi"/>
      <Bjd candidate ="Naveen Pattanaik"/>
      </>

    );
  }
}

export default App;
