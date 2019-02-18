import React from 'react';
import { storiesOf } from '@storybook/react';
import Percentage from '../src/components/Percentage';

storiesOf('Percentage', module)
  .add('under 40', () => <Percentage percent={30} />)
  .add('between 40 and 60', () => <Percentage percent={50} />)
  .add('between 60 and 80', () => <Percentage percent={70} />)
  .add('over 80', () => <Percentage percent={100} />);
