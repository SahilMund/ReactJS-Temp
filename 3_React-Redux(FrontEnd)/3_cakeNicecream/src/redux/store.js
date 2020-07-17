import {createStore} from 'redux';
import rootReducer from './rootReducer';

//creating redux store

const store = createStore(rootReducer)

export default store;