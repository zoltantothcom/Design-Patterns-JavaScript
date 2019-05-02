import { SUBMIT } from '../static/constants/actions';
import { randomFromRange } from '../helpers/randomFromRange';

export const submitMiddleware = ({ getState }) => next => action => {
  if (action.type === SUBMIT) {
    const { progress } = getState();

    // remove code fields - not necessary in progress.answers
    const filteredKeys = ['uuid', 'name', 'type'];
    const filtered = filteredKeys.reduce(
      (obj, key) => ({ ...obj, [key]: progress.current[key] }),
      {}
    );

    const recentlyAnswered = {
      ...filtered,
      variantUuid: action.payload,
      answered: true,
      correct: action.payload === progress.current.uuid
    };

    const remainingPatterns = progress.remaining.filter(
      pattern => pattern.uuid !== progress.current.uuid
    );

    const currentIndex = randomFromRange(remainingPatterns.length);

    action.payload = {
      recentlyAnswered,
      remainingPatterns,
      currentIndex
    };
  }

  next(action);
};
