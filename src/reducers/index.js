const initialState = {
  js: 'es5',
  theme: 'dark',
  answers: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_ANSWER':
    return { ...state, answers: [...state.answers, action.payload] };
  case 'TOGGLE_JS':
    return { ...state, js: action.payload };
  case 'TOGGLE_THEME':
    return { ...state, theme: action.payload };
  default:
    return state;
  }
};

export default rootReducer;
