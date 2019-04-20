// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


//index.js

import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import './bank.css';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const logger = store => next => action => {
  console.group(action.type)
  console.log('current state', store.getState())
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}
const middlewares= [thunk, promise, logger];

// const middlewares = [logger]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


ReactDOM.render(<MyApp />, document.getElementById('root'));