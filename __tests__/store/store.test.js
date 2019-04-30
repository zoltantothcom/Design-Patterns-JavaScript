import {
  TOGGLE_JS,
  TOGGLE_MODE
} from '../../src/static/constants/actions';
import { loadState, saveState } from '../../src/helpers/localStorage';

describe('Store', () => {
  beforeEach(() => {
    jest.resetModules();
    window.localStorage.clear();
  });

  it('should work without saved state', () => {
    const {
      default: store,
      initialState
    } = require('../../src/store');

    expect(store.getState()).toMatchObject(initialState);
  });

  it('should load saved state from localStorage', () => {
    const savedState = {
      mode: 'light',
      js: 'es6'
    };
    saveState(savedState);

    const state = require('../../src/store').default.getState();
    expect(state.mode).toBe('light');
    expect(state.js).toBe('es6');
  });

  it('should save state to localStorage', () => {
    const toggleJSAction = {
      type: TOGGLE_JS,
      payload: 'es6'
    };

    const toggleModeAction = {
      type: TOGGLE_MODE,
      payload: 'light'
    };

    const {
      default: store
    } = require('../../src/store');

    store.dispatch(toggleJSAction);
    store.dispatch(toggleModeAction);

    expect(loadState()).toMatchObject({
      mode: 'light',
      js: 'es6'
    });
  });
});
