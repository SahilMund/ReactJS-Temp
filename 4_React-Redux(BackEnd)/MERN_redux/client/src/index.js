import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './components/myreducer/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mystore = createStore(reducer , composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={mystore}><App /></Provider>,
            document.getElementById('root'));
