import {
  loadState,
  saveState
} from '../src/helpers/localStorage';

describe('LocalStorage utilities', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  const data = {
    foo: 1
  };

  it('should save and load state', () => {
    saveState(data);

    const state = loadState();
    expect(state).toMatchObject(data);
  });

  it('should not throw exceptions if localStorage is undefined', () => {
    Reflect.deleteProperty(window, 'localStorage');

    expect(saveState(data)).toBeUndefined();
    expect(loadState()).toBeUndefined();
  });
});
