import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

function Sidebar(){
  return(
    <h1>Sidebar from index page as a props</h1>
  )
}

ReactDOM.render(<App data={<Sidebar/>}>Hello World of Sidebar</App>,
  document.getElementById('root')
);