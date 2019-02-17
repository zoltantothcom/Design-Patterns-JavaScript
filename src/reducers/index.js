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
  default:
    return state;
  }
};

export default rootReducer;
