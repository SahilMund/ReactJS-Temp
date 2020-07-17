import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIcecream';
import IceCreamContainer from './components/iceCreamContainer';
import './App.css'
import InputCakeConatiner from './components/InputCakeConatiner';
// import ItemContainer from './components/itemContainer';

function App() {
  return (
    <Provider store ={store}>
    <h5>WithOut Hooks</h5>
    <h2>Store 1</h2>
    <div className="App">
      <CakeContainer/>
      <IceCreamContainer/>
    </div>
    <hr></hr>
    <h5>With Hooks</h5>
    <h2>Store 2</h2>
    <div className ="down">
    <HooksCakeContainer/>
    <HooksIceCreamContainer/>
    </div>
    <hr></hr>
    <h2>Store 3</h2>
    <div className="down">
      <InputCakeConatiner/>
      <hr/>
      {/* <ItemContainer cake/>
      <ItemContainer/> */}
    </div>
    
    </Provider>
  );
}

export default App;
