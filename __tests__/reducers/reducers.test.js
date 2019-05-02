import reducer from '../../src/reducers';
import {
  SUBMIT,
  TOGGLE,
  TOGGLE_JS,
  TOGGLE_MODE,
  START,
  RESTART
} from '../../src/static/constants/actions';

const answers = [
  {
    name: 'Template',
    type: 'behavioral',
    answered: true,
    correct: true,
    uuid: 'ba2ca6b0-0c86-4573-baf0-60f33ce6e947'
  },
  {
    name: 'Visitor',
    type: 'behavioral',
    answered: false,
    correct: null,
    uuid: 'eb9427c5-0167-4d65-a99b-a5ffadf5fd46'
  },
  {
    name: 'Singleton',
    type: 'creational',
    answered: false,
    correct: null,
    uuid: 'slearknbqarlnbqasOLdnv'
  }
];

const initialState = {
  js: 'es5',
  mode: 'dark',
  patterns: answers,
  intro: true,
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
      type: TOGGLE,
      payload: null
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState
    });
  });

  it('should toggle JS', () => {
    const action = {
      type: TOGGLE_JS,
      payload: 'es6'
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      js: 'es6'
    });
  });

  it('should toggle MODE', () => {
    const action = {
      type: TOGGLE_MODE,
      payload: 'light'
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      mode: 'light'
    });
  });

  it('should toggle INTRO', () => {
    const action = {
      type: START
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      intro: false
    });
  });

  it('should handle SUBMIT', () => {
    const action = {
      type: SUBMIT,
      payload: {
        currentIndex: 1,
        remainingPatterns: [answers[1], answers[2]],
        recentlyAnswered: answers[0]
      }
    };

    expect(reducer(initialState, action)).toMatchObject({
      ...initialState,
      progress: {
        remaining: [answers[1], answers[2]],
        answers: [answers[0]],
        current: answers[2]
      }
    });
  });

  it('should handle the _last_ SUBMIT', () => {
    const action = {
      type: SUBMIT,
      payload: {
        currentIndex: null,
        remainingPatterns: [],
        recentlyAnswered: answers[2]
      }
    };

    expect(reducer(initialState, action)).toMatchObject({
      ...initialState,
      progress: {
        remaining: [],
        answers: [answers[2]],
        current: null
      }
    });
  });

  it('should handle RESTART', () => {
    const action = {
      type: RESTART,
      payload: null
    };

    expect(reducer(initialState, action)).toMatchObject({
      ...initialState,
      progress: {
        remaining: answers,
        answers: []
      }
    });
  });
});
