import React,{Component} from 'react';

class Widget extends Component{
  render(){
      if(this.props.propic === ""){
          throw new Error("Image Not Found");
      }
    return(
      <>
      <h1>Profile Image</h1>
      <img src={this.props.propic} alt ="dominos.png"/>
      </>
    )
  }
}

export default Widget;