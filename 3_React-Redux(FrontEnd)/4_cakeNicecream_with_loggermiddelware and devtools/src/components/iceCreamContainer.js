
import React from 'react';
import {connect} from 'react-redux';

import {buyIceCream} from '../redux/actionCreator';

//rfce -- for functional component

function IceCreamContainer(props) {
    return (
        <div>
       
            <h3>Number of IceCream : {props.numberOFIceCream}</h3>
            <button onClick={props.buyIceCream}>Buy IceCreams</button>
        </div>
    )
}

//here the state of the redux store is mapped to component props
const mapStateToProps = (state) => {
    return {
        numberOFIceCream: state.iceCream.numberOFIceCream
    }
}

//here dispatch of an action creator to a prop in our component
const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => {
            dispatch(buyIceCream())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);
//connect 
