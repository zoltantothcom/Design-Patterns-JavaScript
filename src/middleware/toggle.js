import { toggleJS, toggleMode } from '../actionCreators/toggle';

export const toggleMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === 'TOGGLE') {
    switch (action.payload) {
    case 'js':
      const js = getState()['js'] === 'es5' ? 'es6' : 'es5';
      return dispatch(toggleJS(js));

    case 'mode':
      const mode = getState()['mode'] === 'dark' ? 'light' : 'dark';
      return dispatch(toggleMode(mode));
    }
  }

  next(action);
};
