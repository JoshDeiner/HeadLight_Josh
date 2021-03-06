import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Head/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Redux/Reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Router>
  <App />
</Router>
, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
