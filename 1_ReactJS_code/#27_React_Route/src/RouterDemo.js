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
                        <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/contact" component={Contact}/>
                        <Route component={PageError}/>
                        </Switch>
                    </div>


                </Brouter>
            </>
        );
    }
}
//Defining route components

//Home Copmonent
function Home(){
    return(
        <>
        <h1>Welome User</h1>
        
         </>
    );
    
}
//services component
function Services(){
    return(
        <>
        <h1>Sevices </h1>
        <ul>
            <li>Website Designing</li>
            <li>Website Devlopment</li>
            <li>UI Designing</li>
            <li>UX Designing</li>

        </ul>
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
 
export default RouterDemo;