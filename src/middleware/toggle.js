import { TOGGLE } from '../data/constants';
import { toggleJS, toggleMode } from '../actions/toggle';

export const toggleMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === TOGGLE) {
    switch (action.payload) {
    case 'js':
      const js = getState()['js'] === 'es5' ? 'es6' : 'es5';
      dispatch(toggleJS(js));
      break;
    case 'mode':
      const mode = getState()['mode'] === 'dark' ? 'light' : 'dark';
      dispatch(toggleMode(mode));
      break;
    }
  }

  next(action);
};
