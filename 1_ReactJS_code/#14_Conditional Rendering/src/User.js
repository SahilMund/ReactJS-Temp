import React from 'react';

function UserGreeting(props) {
    return(
        <>
        <h1>Welcome back!</h1>
        <button onClick={props.loginHandler}>Log Out</button>
        </>);
  }

export default UserGreeting;