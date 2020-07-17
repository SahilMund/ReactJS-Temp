import React from 'react';
import ReactDOM from 'react-dom';


const Emp =(props)=>{
  return(
    <>
    <h1>Hello welcome to my Website</h1>
    <h1>Hey {props.name}</h1>
    <p>{props.children}</p>
    </>
  )
}
ReactDOM.render(
  <Emp name="sahil">hey boyzz {10+5+4}</Emp>,
  document.getElementById('root')
);

