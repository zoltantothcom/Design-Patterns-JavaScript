import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { toggleMiddleware } from '../middleware';

const store = createStore(reducer, applyMiddleware(toggleMiddleware));

export default store;
