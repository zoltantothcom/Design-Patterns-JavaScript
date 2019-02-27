import { randomFromRange } from '../helpers/randomFromRange';

const rootReducer = (state, action) => {
  switch (action.type) {
  case 'SUBMIT':
    const { recentlyAnswered, remainingPatterns, currentIndex } = action.payload;

    const current = remainingPatterns.length ? remainingPatterns[currentIndex] : null;

    return {
      ...state,
      progress: {
        answers: state.progress.answers.concat(recentlyAnswered),
        remaining: remainingPatterns,
        current
      }
    };
  case 'TOGGLE':
    return state;
  case 'TOGGLE_JS':
    return { ...state, js: action.payload };
  case 'TOGGLE_MODE':
    return { ...state, mode: action.payload };
  case 'RESTART':
    return {
      ...state,
      progress: {
        answers: [],
        remaining: state.patterns,
        current: state.patterns[randomFromRange(state.patterns.length)]
      }
    };
  default:
    return state;
  }
};

export default rootReducer;
