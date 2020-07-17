import {createStore} from 'redux';
import cakeReducer from './cake/cakeReducer';

//creating redux store

const store = createStore(cakeReducer)

export default store;