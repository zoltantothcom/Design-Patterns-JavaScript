export const submitMiddleware = ({ getState }) => next => action => {
  if (action.type === 'SUBMIT') {
    const { progress } = getState();

    const recentlyAnswered = {
      ...progress.current,
      answered: true,
      answerId: action.payload,
      correct: action.payload === progress.current.uuid
    };

    const remainingPatterns = progress.remaining.filter(
      pattern => pattern.uuid !== progress.current.uuid
    );
    // console.log(remainingPatterns);

    const currentIndex = Math.floor(Math.random() * remainingPatterns.length);
    // console.log(currentIndex);

    action.payload = {
      recentlyAnswered,
      remainingPatterns,
      currentIndex
    };
  }

  next(action);
};
