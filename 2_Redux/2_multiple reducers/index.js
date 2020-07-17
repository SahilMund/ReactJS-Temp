const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM="BUY_ICECREAM"

//AN action is an object with type property

function buyCake(){  //action creater
    return{
        
    type:BUY_CAKE,
    info:'First Redux Action'
    }
}


function buyIceCreams(){  //action creater
    return{
        
    type:BUY_ICECREAM
    }
}

//defining  previous state

const initialState ={
    numOfCakes : 10,
    numOfIceCreams:20
}

//defining reducers
// i.e.  (prevstate,action) => newState

const reducer  = (state = initialState ,action )=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, //copying the value of state
            numOfCakes:state.numOfCakes-1
        }

        case BUY_ICECREAM: return{
            ...state, //copying the value of state
            numOfIceCreams:state.numOfIceCreams-1
        }

        default : return state
    }
}


//Step by Step redux

//1. holding application of the state (or) creating redux store

const store =createStore(reducer)   


//2. accsesing the state
console.log('initial State',store.getState())

//4. regiter listener
const unsubscribe = store.subscribe( () => console.log("updated state",store.getState()))

//3 .allow state to be updated


store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());



//5. unsubscribe frrom store
unsubscribe();