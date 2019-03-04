import { createStore, applyMiddleware, compose } from 'redux';
const uuid = require('uuid/v4');
import reducer from '../reducers/index';
import patterns from '../static/patterns';
import middleware from '../middleware';

export const answers = patterns.map(pattern => ({
  ...pattern,
  answered: false,
  correct: null,
  answerId: null,
  uuid: uuid()
}));

export const initialProgress = {
  answers: [],
  remaining: answers,
  current: answers[0]
};

const initialState = {
  js: 'es5',
  mode: 'dark',
  patterns: answers,
  progress: initialProgress
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
