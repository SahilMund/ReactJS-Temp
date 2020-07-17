import React from 'react';

function GuestGreeting(props) {
    return(
        <>
       
        <h1>Please Log In</h1>
        <button onClick={props.logoutHandler}>Log In</button>
        </>);
  };

export default GuestGreeting;