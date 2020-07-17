import {BUY_ICECREAM} from './iceTypes';

//Reducers

const initialState = {
    numberOFIceCream : 20
}

const IceCreamReducers = (state = initialState ,action) =>{
    switch(action.type){
            case BUY_ICECREAM : return{
                ...state,
                numberOFIceCream :state.numberOFIceCream -1
            }

            default :return state
    }
}

export default IceCreamReducers;