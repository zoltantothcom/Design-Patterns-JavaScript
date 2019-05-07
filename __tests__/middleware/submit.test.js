import configureMockStore from 'redux-mock-store';
import { submitMiddleware } from '../../src/middleware/submit';
import { SUBMIT } from '../../src/static/constants/actions';

const next = jest.fn();
const mockStore = configureMockStore();
const patterns = [
  {
    uuid: 'abc123',
    name: 'Prototype',
    type: 'creational',
    codeES5: 'Code ES5',
    codeES6: 'Code ES6',
    answered: false,
    correct: null,
    variants: [{
      uuid: 'abc234',
      name: 'SIngleton'
    }, {
      uuid: 'abc123',
      name: 'Prototype'
    }]
  },

  {
    uuid: 'abc234',
    name: 'Singleton',
    type: 'creational',
    codeES5: 'Code ES5',
    codeES6: 'Code ES6',
    answered: false,
    correct: null,
    variants: [{
      uuid: 'abc234',
      name: 'SIngleton'
    }, {
      uuid: 'abc123',
      name: 'Prototype'
    }]
  }
];

describe('Submit middleware', () => {
  it('should update the payload upon SUBMIT', () => {
    const store = mockStore({
      progress: {
        answers: [],
        remaining: patterns,
        current: patterns[0]
      }
    });
    const action = { type: SUBMIT, payload: 'abc123' };

    submitMiddleware(store)(next)(action);

    expect(next).toHaveBeenCalledWith({
      payload: {
        currentIndex: 0,
        recentlyAnswered: {
          answered: true,
          correct: true,
          name: 'Prototype',
          type: 'creational',
          uuid: 'abc123',
          variantUuid: 'abc123'
        },
        remainingPatterns: [
          {
            answered: false,
            codeES5: 'Code ES5',
            codeES6: 'Code ES6',
            correct: null,
            name: 'Singleton',
            type: 'creational',
            uuid: 'abc234',
            variants: [{
              uuid: 'abc234',
              name: 'SIngleton'
            }, {
              uuid: 'abc123',
              name: 'Prototype'
            }]
          }
        ]
      },
      type: SUBMIT
    });
  });

  it('should return _next_ when the action is not SUBMIT', () => {
    const store = mockStore({});
    const action = { type: 'ERROR' };

    submitMiddleware(store)(next)(action);

    expect(store.getActions()[0]).toBeFalsy();
  });
});
