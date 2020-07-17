import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import "./Style.css"



class Emp extends Component{

  state={
    change : false
  }

  changeStyle=() =>{
    this.setState({
      change : true

    });
  }

  render(){

  // if(this.state.change){
  
  // }
  //Using spread operator to use multiple css objectfor one tag
  return(
    <>
    <h1 className="title">Hello World</h1>
    <h1 className={this.state.change ? "title" : "copyright"}>Myself Sahil</h1>
    <button onClick={this.changeStyle}>Change Style</button>
    </>
  )
;
}
}

ReactDOM.render(<Emp/>,
  document.getElementById('root')
);


