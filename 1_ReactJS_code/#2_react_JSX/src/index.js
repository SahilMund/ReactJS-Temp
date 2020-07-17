import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//const element=React.createElement("h1",null,"hello Sahil !!")
// const exp=<h1>{5*6}</h1>
// const name="World"
// const element=<h1>Hello {name}</h1>

const e1=React.createElement("h1",{className:"title"},"Hello Sahil");

ReactDOM.render(e1,
  document.getElementById('root')
);

