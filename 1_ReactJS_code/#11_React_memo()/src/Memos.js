import React  from 'react';

function MemoComp({name}) {
    
    console.log("Memo Component is calling....")
    return(
        <>
        <h1>{name}</h1>
        </>
    );
}

export default React.memo(MemoComp);

//bcz of React.memo() function now if value  will not change then it doesn't
// call but parent component render() will called repeatedly.
