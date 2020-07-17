// custom hooks 

import {useState} from "react";

function useCustomHook(){

const[salary,setSalary]=useState(500);

const incrementSalary=()=>{

    setSalary(salary+500);
}

return {salary,incrementSalary};
}

export default useCustomHook;