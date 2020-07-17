import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import IceCreamReducers from './iceCream/iceReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream:IceCreamReducers
})

export default rootReducer;