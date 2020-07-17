import React from "react";
import ReactDOM from "react-dom";
import useCustomHook from "./custom";

function Employee() {
   //const data= useCustomHook();
   const data = useCustomHook();
   const data2 = useCustomHook();

    return(
        <>
        <h1>Employee Details</h1>
        <h2>Hi User 1, Your Salary is {data.salary}</h2>
        <button onClick={data.incrementSalary}>Salary Increment</button>

        <h2>Hi User 2, Your Salary is {data2.salary}</h2>
        <button onClick={data2.incrementSalary}>Salary Increment</button>
        </>
    );
    
}

ReactDOM.render(<Employee/>,document.getElementById("root"));