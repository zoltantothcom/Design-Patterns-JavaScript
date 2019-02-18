import React from 'react';
import Provider from './Provider.js';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from '../src/components/Button';
import store from '../src/store';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { themeCommon } from '../src/styles/themes/theme.common';
import { themeLight } from '../src/styles/themes/theme.light';
import { themeDark } from '../src/styles/themes/theme.dark';

const light = { ...themeCommon, ...themeLight };
const dark = { ...themeCommon, ...themeDark };

const themes = [light, dark];

const withProvider = story => <Provider store={store}>{story()}</Provider>;

storiesOf('Button', module)
  .addDecorator(withProvider)
  .addDecorator(withThemesProvider(themes))
  .addDecorator(withKnobs)

  .add('label', () => (
    <Button label={text('label', 'Hello Button')} id="abc" onClick={() => console.log('click')} />
  ));
