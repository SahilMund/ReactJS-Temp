import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIcecream';
import IceCreamContainer from './components/iceCreamContainer';
import './App.css'


function App() {
  return (
    <Provider store ={store}>
    <h1>WithOut Hooks</h1>
    <div className="App">
      <CakeContainer/>
      <IceCreamContainer/>
    </div>
    <hr></hr>
    <h1>With Hooks</h1>
    <div class ="down">
    <HooksCakeContainer/>
    <HooksIceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
