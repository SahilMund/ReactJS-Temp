import {BUY_CAKE} from './cakeTypes'
//Reducers


const initialState = {
    numberOFCakes : 10
}

const cakeReducers = (state = initialState ,action) =>{
    switch(action.type){
            case BUY_CAKE : return{
                ...state,
                numberOFCakes :state.numberOFCakes - action.payload
            }

            default :return state
    }
}

export default cakeReducers;