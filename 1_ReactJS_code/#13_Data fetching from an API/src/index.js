import React, { Component } from "react";
import ReactDOM from "react-dom";
import FunC from "./function_component";

 class Weather extends Component {
   constructor(){
     super();
     this.state = {
      hasErrors: false,
      planets: {}
    };

   }
  

  componentDidMount() {
    fetch("api.openweathermap.org/data/2.5/weather?q=London") 
      .then(res => res.json())
      .then(res => this.setState({ planets: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return <div>{JSON.stringify(this.state.planets)}</div>;
  }
}

ReactDOM.render(<Weather/>,document.getElementById("rootClass"));
ReactDOM.render(<FunC/>,document.getElementById("rootFunction"));