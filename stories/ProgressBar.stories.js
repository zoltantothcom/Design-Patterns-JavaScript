import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from '../src/components/ProgressBar';

const initialArray = (n, isAnswered, isCorrect) => {
  let arr = Array(...Array(n));

  return arr.map((x, i) => {
    return {
      patternId: null,
      answerId: null,
      answered: isAnswered,
      correct: isCorrect,
      uuid: i
    };
  });
};

const answersDefault = initialArray(23);
const answersSuccess = initialArray(23, true, true);
const answersError = initialArray(23, true, false);

storiesOf('ProgressBar', module)
  .add('unanswered questions', () => <ProgressBar answers={[]} remaining={answersDefault} />)
  .add('all questions correct', () => <ProgressBar answers={answersSuccess} remaining={[]} />)
  .add('all questions wrong', () => <ProgressBar answers={answersError} remaining={[]} />);
