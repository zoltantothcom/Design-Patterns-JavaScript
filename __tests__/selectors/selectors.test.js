import {
  getRemaining,
  getPatterns,
  getMode,
  getJS,
  getCurrent,
  getAnswers
} from '../../src/selectors';

describe('Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      mode: 'dark',
      js: 'es6',
      patterns: [0, 1, 2, 3, 4, 5, 6],
      progress: {
        answers: [0, 1, 2],
        remaining: [4, 5, 6],
        current: 3
      }
    };
  });

  it('should get the current pattern', () => {
    expect(getCurrent(state)).toEqual(3);
  });

  it('should get the remaining patterns', () => {
    expect(getRemaining(state)).toEqual([4, 5, 6]);
  });

  it('should get the all patterns', () => {
    expect(getPatterns(state)).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it('should get the answers', () => {
    expect(getAnswers(state)).toEqual([0, 1, 2]);
  });

  it('should get the theme mode', () => {
    expect(getMode(state)).toBe('dark');
  });

  it('should get the JS version', () => {
    expect(getJS(state)).toBe('es6');
  });
});
