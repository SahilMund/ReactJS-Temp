import React,{ Component } from 'react';
import "./App.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      phone:''
    }
    this.txtName = React.createRef();
    this.txtEmail = React.createRef();
    this.txtPhone = React.createRef();
  }

  
  changeSubmit =(e) =>{

    e.preventDefault();
    // console.log(this.txtInput.current,this.txtInput)
    // this.txtInput.current.focus();
    //const key=this.txtInput.current.name;
    this.setState({
      name:this.txtName.current.value,
      email:this.txtEmail.current.value,
      phone:this.txtPhone.current.value

      
    })

  }
  render(){
  return (
    <>
    
    <h1>Welcome USER !</h1>
    <center>
    <h1>React Contact  Form</h1>

    <h4>Name : {this.state.name}</h4>
    <h4>email : {this.state.email}</h4>
    <h4>phone no : {this.state.phone}</h4>

    <form onSubmit={this.changeSubmit}>
    <label>
    Name:
    <input type="text" defaultValue="Sahil" name="name" ref={this.txtName}/>
    </label><br/><br/>

    <label>
    Email:
    <input type="text" name="email"  ref={this.txtEmail}/>
    </label><br/><br/>

    <label>
    Phone no.:
    <input type="text" name="phone" ref={this.txtPhone}/>
    </label><br/><br/>

    <input type="submit" value="Submit" />
    </form>
    </center>
    </>
    );
  }
}

export default App;
