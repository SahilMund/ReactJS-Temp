import React,{ Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      name:"",
      email:"",
      phone:""
    }
    
  }
  // We can't change the value of a input directly as in HTML so we have 
  //to use an eventHAndler
  changeHandler=(event) =>{
  
    //this.setState({name:event.target.value})
    const key=event.target.name;
    const val=event.target.value;
    this.setState({
      [key]:val
    })
  }

  changeSubmit =(e) =>{
   // console.log(this.state);
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({name:'',email:'',phone:''})

  }
  render(){
  return (
    <>
    
    <h1>Welcome USER !</h1>
    <center>
    <h1>React Contact  Form</h1>
    <form onSubmit={this.changeSubmit}>
    <label>
    Name:
    <input type="text" name="name"  value={this.state.name} onChange={this.changeHandler}/>
    </label><br/><br/>

    <label>
    Email:
    <input type="text" name="email"  value={this.state.email} onChange={this.changeHandler}/>
    </label><br/><br/>

    <label>
    Phone no.:
    <input type="text" name="phone"  value={this.state.phone} onChange={this.changeHandler}/>
    </label><br/><br/>

    <input type="submit" value="Submit" />
    </form>
    </center>
    </>
    );
  }
}

export default App;
