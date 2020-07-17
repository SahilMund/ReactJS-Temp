import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

class Emp extends Component{
  constructor(props){
     super(props);

     this.state={
      name:this.props.name,
      count:this.props.count,
    };
    //binding the function with consructor
    this.ClickMe=this.ClickMe.bind(this);
  }

  //declaring onclick function 
   ClickMe(){
    let count=this.state.count;
    let name=this.state.name;
    if(count==1){
      name="sahil"
    }
    if(count==2){
      name="remoo"
    }
    this.setState({name:name});
    this.setState({count:++count});
  }

  render(){
    return(
      <>
      <h1>Hello World</h1>
      <h1>Welcome :{this.state.name}</h1>
      <h1>Total Click: {this.state.count}</h1>
      <button onClick={this.ClickMe}>Click Me</button>
      </>
    );
  }
}
ReactDOM.render(<Emp name="User" count="0"/>,
  
  document.getElementById('root')
);
