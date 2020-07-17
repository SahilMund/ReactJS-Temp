import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {buyCake} from '../redux/actionCreator';


function HooksCakeContainer() {
    const numberOFCakes = useSelector(state => state.cake.numberOFCakes)
    const dispatch = useDispatch()
    return (
        <div>
        
         <h3>Number of cakes : {numberOFCakes}</h3>
        <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}

export default HooksCakeContainer
