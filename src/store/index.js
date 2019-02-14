import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/index';
import { toggleMiddleware } from '../middleware';
import patterns from '../data/patterns';

const answers = patterns.map(pattern => ({
  ...pattern,
  answered: false,
  correct: null,
  patternId: null,
  answerId: null
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

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(toggleMiddleware))
);

export default store;
