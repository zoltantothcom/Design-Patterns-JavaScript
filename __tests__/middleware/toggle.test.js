import configureMockStore from 'redux-mock-store';
import { toggleMiddleware } from '../../src/middleware/toggle';
import { TOGGLE, TOGGLE_JS, TOGGLE_MODE } from '../../src/data/constants';

const next = jest.fn();
const mockStore = configureMockStore();

describe('Toggle middleware', () => {
  it('should dispatch TOGGLE_JS when the payload is `js`', () => {
    const mockDispatch = jest.fn();

    const store = mockStore({
      js: 'es5',
      dispatch: mockDispatch
    });
    const action = { type: TOGGLE, payload: 'js' };

    toggleMiddleware(store)(next)(action);

    expect(store.getActions()[0]).toEqual({
      type: TOGGLE_JS,
      payload: 'es6'
    });

    expect(next).toHaveBeenCalled();
  });

  it('should dispatch TOGGLE_JS when the payload is `js`', () => {
    const mockDispatch = jest.fn();

    const store = mockStore({
      js: 'es6',
      dispatch: mockDispatch
    });
    const action = { type: TOGGLE, payload: 'js' };

    toggleMiddleware(store)(next)(action);

    expect(store.getActions()[0]).toEqual({
      type: TOGGLE_JS,
      payload: 'es5'
    });

    expect(next).toHaveBeenCalled();
  });

  it('should dispatch TOGGLE_MODE when the payload is `mode`', () => {
    const mockDispatch = jest.fn();

    const store = mockStore({
      mode: 'dark',
      dispatch: mockDispatch
    });
    const action = { type: TOGGLE, payload: 'mode' };

    toggleMiddleware(store)(next)(action);

    expect(store.getActions()[0]).toEqual({
      type: TOGGLE_MODE,
      payload: 'light'
    });
  });

  it('should dispatch TOGGLE_MODE when the payload is `mode`', () => {
    const mockDispatch = jest.fn();

    const store = mockStore({
      mode: 'light',
      dispatch: mockDispatch
    });
    const action = { type: TOGGLE, payload: 'mode' };

    toggleMiddleware(store)(next)(action);

    expect(store.getActions()[0]).toEqual({
      type: TOGGLE_MODE,
      payload: 'dark'
    });
  });

  it('should return _next_ when the action is not TOGGLE', () => {
    const store = mockStore({});
    const action = { type: 'ERROR' };

    toggleMiddleware(store)(next)(action);

    expect(store.getActions()[0]).toBeFalsy();
  });
});
