import { createStore, applyMiddleware } from 'redux';
import transitionReducers from './transitionReducers';
import thunkMiddleware from 'redux-thunk';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default createStoreWithMiddleware(transitionReducers);