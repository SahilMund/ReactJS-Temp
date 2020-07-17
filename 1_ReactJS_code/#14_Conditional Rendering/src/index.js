import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import UserGreeting from "./User";
import GuestGreeting from "./Guest";



class Greeting extends Component {

  constructor(props){
    super(props);
    this.state={
      isLoggedIn : this.props.isLoggedIn
    }
  }
  loginHandler=() =>{
      this.setState({isLoggedIn : true});
  }

  logoutHandler=() =>{
    this.setState({isLoggedIn : false});

  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let btn;
    if (isLoggedIn) {
      btn = <UserGreeting  logoutHandler={this.logoutHandler}/>;
    }
    else{
    btn = <GuestGreeting loginHandler={this.loginHandler}/>;
  }
  return(<>{btn}</>);

  // return(
  //   <>
  //   <h1>Hello Employee</h1>
  //   {isLoggedIn  ? <UserGreeting  logoutHandler={this.logoutHandler}/>:<GuestGreeting loginHandler={this.loginHandler}/>}
  //   </>
  // )
}
}


ReactDOM.render(
 
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
