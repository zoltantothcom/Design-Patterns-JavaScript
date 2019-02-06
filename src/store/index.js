import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { toggleMiddleware } from '../middleware';

const initialState = {
  js: 'es5',
  mode: 'light',
  progress: {
    current: 3,
    answers: [
      {
        patternId: 'abc',
        answerId: 'abc',
        answered: true,
        correct: true
      },
      {
        patternId: 'abc',
        answerId: 'xyz',
        answered: true,
        correct: false
      },
      {
        patternId: 'abc',
        answerId: 'abc',
        answered: true,
        correct: true
      },
      {
        patternId: 'abc',
        answerId: 'abc',
        answered: true,
        correct: true
      },
      {
        patternId: 'abc',
        answerId: null,
        answered: false,
        correct: false
      },
      {
        patternId: 'abc',
        answerId: null,
        answered: false,
        correct: false
      }
    ]
  }
};

const store = createStore(reducer, initialState, applyMiddleware(toggleMiddleware));

export default store;
