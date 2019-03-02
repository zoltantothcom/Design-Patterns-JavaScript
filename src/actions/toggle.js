import { TOGGLE, TOGGLE_JS, TOGGLE_MODE } from '../static/constants/actions';

export const toggle = payload => ({
  type: TOGGLE,
  payload
});

export const toggleJS = payload => ({
  type: TOGGLE_JS,
  payload
});

export const toggleMode = payload => ({
  type: TOGGLE_MODE,
  payload
});
