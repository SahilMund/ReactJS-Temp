
import React ,{useState} from 'react';

import {connect} from 'react-redux';

import {buyCake} from '../redux/actionCreator';


function InputCakeConatiner(props) {
    const[number , setNumber] = useState(1)
    return (
        <div>
             <h3>Number of cakes you want : {props.numberOFCakes}</h3>
             <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy_Cakes_</button>
        </div>
    )
}

//here the state of the redux store is mapped to component props
const mapStateToProps = (state) => {
    return {
        numberOFCakes: state.cake.numberOFCakes
    }
}

//here dispatch of an action creator to a prop in our component
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => {
            dispatch(buyCake(number))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(InputCakeConatiner)
