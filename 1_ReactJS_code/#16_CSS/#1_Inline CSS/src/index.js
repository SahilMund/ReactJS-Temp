import React,{Component} from 'react';
import ReactDOM from 'react-dom';

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
  const txtCol ={
    color:'#fff',
    backgroundColor:"#000",
    
  }

  const txtFont ={
    fontSize:'45px',
    color:"red"
   
  }

  const txtCol1={
    textAlign:"center"
    
  }

  const txtC={
    textAlign:"center"
  }

  if(this.state.change){
    txtC.color="red"
  }
  //Using spread operator to use multiple css objectfor one tag
  return(
    <>
    <h1 style={{...txtCol,...txtCol1}}>Welcome to Inline CSS</h1>
    <h2 style={{...txtFont,...{backgroundColor:"blue"}}}> Hey Sahil </h2>
    <h3 style={{backgroundColor:"pink",textAlign:"center"}}>Hey World</h3>
    <h1 style={txtC}>single css</h1>

    <button onClick={this.changeStyle}>Change Style</button>
    </>
  )
;
}
}

ReactDOM.render(<Emp/>,
  document.getElementById('root')
);


