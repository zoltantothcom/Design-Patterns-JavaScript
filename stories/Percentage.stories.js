import React from 'react';
import { storiesOf } from '@storybook/react';
import { Percentage } from '../src/components/Percentage';

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

const answers0 = initialArray(23, true, false);
const answers50 = [...initialArray(11, true, false), ...initialArray(12, true, true)];
const answers100 = initialArray(23, true, true);

storiesOf('Percentage', module)
  .add('under 40', () => <Percentage answers={answers0} />)
  .add('between 40 and 70', () => <Percentage answers={answers50} />)
  .add('over 70', () => <Percentage answers={answers100} />);
