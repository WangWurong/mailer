// import the css file, beacaue it is not js file, we must add the extension
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import core components from redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// initial the store with three parameter
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  // create an outer store, and then assign the createStore
  // all the state change will go through store and the provider will send to its child
  // components
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
