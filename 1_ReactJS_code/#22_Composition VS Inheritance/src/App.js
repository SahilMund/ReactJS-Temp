import React,{Component} from 'react';
import "./App.css";
import Employee from "./Employee";

class App extends Component{
    render(){
        return(
            <>
            <h3><Employee color="red" name="Sahil" empid={1020} /> </h3>
            <h3><Employee color="green" name="Sahil Mund" empid={100} /> </h3>
            <h3><Employee color="yellow" name="Sahil Ranjan mUnd" empid={102} /> </h3>
            {this.props.data}
            {this.props.children}
            </>
        );
    }
}
 
export default App;

//12230019953

