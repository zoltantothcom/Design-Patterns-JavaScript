const rootReducer = (state, action) => {
  switch (action.type) {
  case 'SUBMIT':
    return {
      ...state,
      progress: {
        ...state.progress,
        answers: state.progress.answers.concat(action.payload)
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
