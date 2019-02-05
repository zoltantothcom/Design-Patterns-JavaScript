import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { toggleMiddleware } from '../middleware';

const initialState = {
  js: 'es5',
  mode: 'light',
  answers: []
};

const store = createStore(reducer, initialState, applyMiddleware(toggleMiddleware));

export default store;
