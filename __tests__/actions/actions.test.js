import { restart } from '../../src/actions/restart';
import { submitAnswer } from '../../src/actions/submitAnswer';
import { toggle, toggleJS, toggleMode } from '../../src/actions/toggle';
import {
  SUBMIT,
  TOGGLE,
  TOGGLE_JS,
  TOGGLE_MODE,
  RESTART
} from '../../src/static/constants/actions';

describe('Action Creators', () => {
  it('should dispatch RESTART action', () => {
    expect(restart('restart')).toEqual({
      type: RESTART,
      payload: 'restart'
    });
  });

  it('should dispatch SUBMIT action', () => {
    expect(submitAnswer('submit')).toEqual({
      type: SUBMIT,
      payload: 'submit'
    });
  });

  it('should dispatch TOGGLE action', () => {
    expect(toggle('toggle')).toEqual({
      type: TOGGLE,
      payload: 'toggle'
    });
  });

  it('should dispatch TOGGLE_JS action', () => {
    expect(toggleJS('toggle js')).toEqual({
      type: TOGGLE_JS,
      payload: 'toggle js'
    });
  });

  it('should dispatch TOGGLE_MODE action', () => {
    expect(toggleMode('toggle mode')).toEqual({
      type: TOGGLE_MODE,
      payload: 'toggle mode'
    });
  });
});
