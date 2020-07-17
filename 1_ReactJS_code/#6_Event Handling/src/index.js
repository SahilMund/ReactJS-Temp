import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

class Employee extends Component{

  state={
    name:"Sahil",
    id:1
  }
  //INstead of binding we used arrow function here
  clickme = (id,e) =>{
    console.log(id)
    console.log(e)

  }

  render(){
    return(
      <>
      <h1>Hello Employee</h1>
      <h1>Name : {this.state.name} </h1>
      <button onClick={(e) =>{this.clickme(this.state.id,e)}}>
       By arrow function
      </button>

      <button onClick={this.clickme.bind(this,this.state.id)}>
      By binding</button>

      </>
    );
  }
}

ReactDOM.render(<Employee/>,
  document.getElementById('root')
);
