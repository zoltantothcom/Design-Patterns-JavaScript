import React from 'react';
import Provider from './Provider.js';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from '../src/components/Button';
import store from '../src/store';

const withProvider = story => <Provider store={store}>{story()}</Provider>;

storiesOf('Button', module)
  .addDecorator(withProvider)
  .addDecorator(withKnobs)

  .add('label', () => (
    <Button label={text('label', 'Hello Button')} id="abc" onClick={() => console.log('click')} />
  ));
