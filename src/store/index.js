import { createStore, applyMiddleware, compose } from 'redux';
const uuid = require('uuid/v4');
import reducer from '../reducers/index';
import patterns from '../data/patterns';
import middleware from '../middleware';

const answers = patterns.map(pattern => ({
  ...pattern,
  answered: false,
  correct: null,
  patternId: null,
  answerId: null,
  uuid: uuid()
}));

const initialState = {
  js: 'es5',
  mode: 'dark',
  patterns,
  progress: {
    current: patterns[0],
    answers: [],
    remaining: answers
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
