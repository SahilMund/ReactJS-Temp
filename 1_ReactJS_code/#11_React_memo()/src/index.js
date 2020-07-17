import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import Memo from "./Memos";



class Parentcomp extends Component{

  constructor(props){
    super(props)
    this.state={
      name:"Sahil"
    }
  }

  componentDidMount(){
    console.log("parent component componentDidMount calling.....")
    setInterval( () =>{
      this.setState({
        name:"Sahil Mund"
      })
    },5000);
  }

  render(){
    console.log("parent component rendering....")
    return(
      <>
      <h1>Your Name is : {this.state.name}</h1>
      <Memo name={this.state.name}/>
     
      </>
    )
  }
}

ReactDOM.render(<Parentcomp/>,
  document.getElementById('root')
);
