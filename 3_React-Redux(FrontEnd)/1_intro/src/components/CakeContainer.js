
import React from 'react';
import {connect} from 'react-redux';

import {buyCake} from '../redux/actionCreator';

//rfce -- for functional component

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numberOFCakes}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}

//here the state of the redux store is mapped to component props
const mapStateToProps = (state) => {
    return {
        numberOFCakes: state.numberOFCakes
    }
}

//here dispatch of an action creator to a prop in our component
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => {
            dispatch(buyCake())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
//connect 
