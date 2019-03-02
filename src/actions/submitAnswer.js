import { SUBMIT } from '../data/constants';

export const submitAnswer = payload => ({
  type: SUBMIT,
  payload
});
