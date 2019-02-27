import reducer from '../../src/reducers';

const answers = [
  {
    name: 'Template',
    type: 'behavioral',
    codeES5: 'Code ES5',
    codeES6: 'Code ES6',
    answered: false,
    correct: null,
    answerId: null,
    uuid: 'ba2ca6b0-0c86-4573-baf0-60f33ce6e947'
  },
  {
    name: 'Visitor',
    type: 'behavioral',
    codeES5: 'Code ES5',
    codeES6: 'Code ES6',
    answered: false,
    correct: null,
    answerId: null,
    uuid: 'eb9427c5-0167-4d65-a99b-a5ffadf5fd46'
  }
];

const initialState = {
  js: 'es5',
  mode: 'dark',
  patterns: answers,
  progress: {
    answers: [],
    remaining: answers,
    current: answers[0]
  }
};

describe('Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(undefined);
  });

  it('should return unchanged state on toggle', () => {
    const action = {
      type: 'TOGGLE',
      payload: null
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState
    });
  });

  it('should toggle JS', () => {
    const action = {
      type: 'TOGGLE_JS',
      payload: 'es6'
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      js: 'es6'
    });
  });

  it('should toggle MODE', () => {
    const action = {
      type: 'TOGGLE_MODE',
      payload: 'light'
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      mode: 'light'
    });
  });

  xit('should handle SUBMIT', () => {
    const action = {
      type: 'SUBMIT',
      payload: {
        currentIndex: 0,
        remainingPatterns: answers[1],
        recentlyAnswered: answers[0]
      }
    };

    expect(reducer(initialState, action)).toMatchObject({
      ...initialState,
      progress: {
        remaining: [answers[1]],
        answers: [answers[0]],
        current: answers[1]
      }
    });
  });
});
