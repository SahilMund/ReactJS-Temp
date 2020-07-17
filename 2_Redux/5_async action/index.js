const redux = require('redux');
const createStore=redux.createStore;
const applymiddleware = redux.applyMiddleware;

const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');


//state
const initialState = {
    loading:false,
    data:[],
    error:''
}


const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILUARE = "FETCH_USER_FAILUARE";

//ACTIONS

const fetchUsersRequest = () =>{
    return{
       
        type:FETCH_USER_REQUEST
    }
}


const fetchUsersSuccess = (data) =>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:data
    }
}


const fetchUsersFailuare = (error) =>{
    return{
        type:FETCH_USER_FAILUARE,
        payload:error
    }
}

//reducers

const asyncReducer =(state = initialState ,action) =>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
             
                loading:true
            }

        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                data:action.payload,
                error:''
            }
        case FETCH_USER_FAILUARE:
            return{
                    loading:false,
                    data:'',
                    error:action.payload
                }
    }

}

//action creator  (it always return action object but bt using thunk mideelware
            //we can return a function instead of action )
const fetchUsers = () =>{
    return function(dispatch) {
            dispatch(fetchUsersRequest())
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>{
                //respose.data is an array of users
                const data = res.data.map(user => user.id)
                dispatch(fetchUsersSuccess(data))
            })
            .catch(err =>{
                //error.message is the error description
                dispatch(fetchUsersFailuare(err.message))
            })
    }
}

//redux store

const store = createStore(asyncReducer,applymiddleware(thunkMiddleware))

 store.subscribe( () =>{
    console.log(store.getState())
})
//3 .allow state to be updated


store.dispatch(fetchUsers());

