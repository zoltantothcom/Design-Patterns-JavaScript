import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { themeCommon } from '../src/styles/themes/theme.common';
import { themeLight } from '../src/styles/themes/theme.light';
import { themeDark } from '../src/styles/themes/theme.dark';

const light = { ...themeCommon, ...themeLight };
const dark = { ...themeCommon, ...themeDark };

const themes = [light, dark];
addDecorator(withThemesProvider(themes));

const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
