import React, { Component } from 'react';
// using ES6 modules
import { BrowserRouter as Brouter, Route, Link , Switch } from "react-router-dom";
 
 class RouterDemo extends Component {
    render() { 
        return (
            <>
                <h1>Router Demo</h1>
                <Brouter>
                    <div>
                       <Header/>
                        <CustomRoute/>
                    </div>


                </Brouter>
            </>
        );
    }
}
//Defining route components

//Header

function Header(){
    return(
        <>
         <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/services">Services</Link></li>
             <li><Link to="/contact">Contact</Link></li>
         </ul>
        </>
    )
}

function CustomRoute(){
    return(
        <>
        <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/services" component={Services}/>
             <Route path="/contact" component={Contact}/>
             <Route component={PageError}/>
        </Switch>
        </>
    )
}
//Home Copmonent
function Home(){
    return(
        <>
        <h1>Welome User</h1>
        
         </>
    );
    
}
//services component
function Services(props){
    // console.log(props);
    // console.log(props.match,props.location,props.history)
    return(
        <>
        <h1>Sevices </h1>
        <ul>
            <li><Link to={`${props.match.path}/website-designing`}>Website Designing</Link></li>
            <li><Link to={`${props.match.path}/website-devlopment`}>Website Devlopment</Link></li>
            <li><Link to={`${props.match.path}/UI-designing`}>UI Designing</Link></li>
            <li><Link to={`${props.match.path}/UX-designing`}>UX Designing</Link></li>
        </ul>
        <Switch>
             <Route exact path={`${props.match.path}/:obj`} component={ServiceComponent}/>
             

        </Switch>
         </>
    );
    
}

//aboutus component
function About(){
    return(
        <>
        <h1>About Us</h1>
        <h3>Need private packages and team management toolsNeed private packages and team management tools
        Need private packages and team management toolsNeed private packages and team management tools
        Need private packages and team management tools</h3>
        </>
    );

}

//contact component
function Contact(){
    return(
        <>
        <h1>Contacts </h1>
        <ul>
            <li>Email : sahilmund01@gmail.com</li>
            <li>COntact number :6370480153</li>
 
        </ul>
         </>
    );
    
}

//404 error page not found
function PageError(){
    return(
        <>
        <h1>404 Error</h1>
        <p>OOPs ! Page not found</p>
        
         </>
    );
    
}
 

//service components for nested routing
function ServiceComponent({match}){
    if(match.params.obj==="website-designing"){
    return(
        <>
        <h1>Welcome to {match.params.obj}</h1>
        <p>Hey coder !! let's design a website </p>
         </>
    );
}
else {
    return(
        <>
        <h1>Welcome to {match.params.obj}</h1>
        <p>Hey coder!!!!! </p>
         </>
    );
}
}


//service component for UX designing
// class UXDesigner extends Component{
//     render(){
//        const {match,location,history}=this.props;
    
//     return(
//       <>
//       <h1>Hello</h1>
//       </>
//         );
    
// }}

export default RouterDemo;