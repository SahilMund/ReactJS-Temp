
import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux/actionCreator'

function ItemContainer(props) {
    return (
        <div>
        <h3>Item : {props.item}</h3>
            <button onClick = {props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
                    ? state.cake.numberOFCakes 
                    : state.iceCream.numberOFIceCream 
    return {
    item :itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
                         ? dispatch(buyCake())
                         : dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
