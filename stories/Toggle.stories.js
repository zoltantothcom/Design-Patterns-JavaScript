import React from 'react';
import Provider from './Provider.js';
import { storiesOf } from '@storybook/react';
import Toggle from '../src/components/Toggle';
import store from '../src/store';

const withProvider = story => <Provider store={store}>{story()}</Provider>;

storiesOf('Toggle', module)
  .addDecorator(withProvider)

  .add('js', () => <Toggle control="js" />)
  .add('mode', () => <Toggle control="mode" />);
