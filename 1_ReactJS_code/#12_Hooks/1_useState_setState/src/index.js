import React ,{useState} from "react";
import ReactDOM from "react-dom";
 
function Employee() {
    
   const [name, setName] =useState('Pradeep'); 
   const [empid, setEmpid] =useState(28); 
 
  const btnClick=()=>{
       setName("Tutorialswebsite");
       setEmpid(30);
   }
    return(
        <>
        <h1>Your Name is :{name}</h1>
        <h1>Your Empid is: {empid}</h1>
        <button type="button" onClick={btnClick} >Click Me</button>
        </>
    );
}

ReactDOM.render(<Employee/>,document.getElementById("root"))