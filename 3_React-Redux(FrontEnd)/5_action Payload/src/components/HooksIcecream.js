import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {buyIceCream} from '../redux/actionCreator';


function HooksIceCreamContainer() {
    const numberOFIceCream = useSelector(state => state.iceCream.numberOFIceCream)
    const dispatch = useDispatch()
    return (
        <div>
         <h3>Number of iceCreams  : {numberOFIceCream}</h3>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCreams</button>
        </div>
    )
}

export default HooksIceCreamContainer
