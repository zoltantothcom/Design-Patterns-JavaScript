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
import { shuffle } from '../helpers/shuffleArray';

const patternsWithUuids = patterns.map(pattern => ({ ...pattern, uuid: uuid() }));
export const answers = patternsWithUuids.map(current => {
  // get 3 random patterns in addition to correct one
  const allOtherAnswers = patternsWithUuids.filter(pattern => pattern.uuid !== current.uuid);
  const additional = shuffle(allOtherAnswers).slice(0, 3);
  // shuffle the 4 answers
  const variants = shuffle([current, ...additional]);

  return {
    ...current,
    // ButtonContainer needs only name and uuid
    variants: variants.map(({ name, uuid }) => ({ name, uuid })),
    answered: false,
    correct: null
  };
});

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
