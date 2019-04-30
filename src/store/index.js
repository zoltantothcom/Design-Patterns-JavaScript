import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
const uuid = require('uuid/v4');
import reducer from '../reducers/index';
import patterns from '../static/patterns';
import middleware from '../middleware';
import {
  loadState,
  saveState
} from '../helpers/localStorage';

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

export const initialState = {
  js: 'es5',
  mode: 'dark',
  intro: true,
  patterns: answers,
  progress: initialProgress
};

const state = {
  ...initialState,
  ...loadState()
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, state, composeEnhancers(applyMiddleware(...middleware)));

store.subscribe(() => {
  const currentState = store.getState();
  saveState({
    mode: currentState.mode,
    js: currentState.js
  });
});

export default store;
