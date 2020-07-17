import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

class Emp extends Component{
  constructor(props){
     super(props);

     this.state={
      users:["sahil","blacky","checky","tekky","tony","munny"],
      count:0,
    };
    //binding the function with consructor
    this.ClickMe=this.ClickMe.bind(this);
  }

  //declaring onclick function 
   ClickMe(){
       this.setState({count:++this.state.count});
  }

  render(){
    return(
      <>
      <h1>Hello World</h1>
      <h1>Total Click: {this.state.count}</h1>
      <ul>
      {this.state.users.map((user,index)=>(
        <li key={index}>{user}</li>

      ))}

      
      
      </ul>
      <button onClick={this.ClickMe}>Click Me</button>
      </>
    );
  }
}
ReactDOM.render(<Emp/>,
  
  document.getElementById('root')
);
