import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function Employee() {
 const[name, setName] =useState("Pradeep");
 const[name2, setName2] =useState("Vikas");
const [salary,setSalary]=useState(0);
const [salary2,setSalary2]=useState(5000);

const clickIncrement =()=>{
   setSalary(salary+1);
}



const clickDecrement =()=>{
   setSalary2(salary2-1);
}


    //useEffect takes two value (function,array)  ----
    //to which component we want to render their name sahould be pass in array
  useEffect(()=>{console.log("useEffect is rendering")},[salary2]);
    return(
        <>
        <h1>Employee Details</h1>
        <h2>Hi {name}, Your Salary is {salary}</h2>
        <button onClick={clickIncrement}>Salary Increment</button>
        <h2>Hi {name2}, Your Salary is {salary2}</h2>
        <button onClick={clickDecrement}>Salary Decrement</button>
        </>
    );
    
}

ReactDOM.render(<Employee/>,document.getElementById("root"));