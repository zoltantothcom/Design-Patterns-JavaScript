import React from 'react';
import { storiesOf } from '@storybook/react';
import Percentage from '../src/components/Percentage';

storiesOf('Percentage', module)
  .add('under 40', () => <Percentage percent={30} />)
  .add('between 40 and 70', () => <Percentage percent={60} />)
  .add('over 70', () => <Percentage percent={90} />);
