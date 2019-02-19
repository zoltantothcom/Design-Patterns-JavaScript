import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../../src/styles/themes/theme.light';
import { themeDark } from '../../src/styles/themes/theme.dark';

export const renderWithLightTheme = component =>
  renderer.create(<ThemeProvider theme={themeLight}>{component}</ThemeProvider>);

export const renderWithDarkTheme = component =>
  renderer.create(<ThemeProvider theme={themeDark}>{component}</ThemeProvider>);
