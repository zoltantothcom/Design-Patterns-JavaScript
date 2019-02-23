import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../../src/styles/themes/theme.light';
import { themeDark } from '../../src/styles/themes/theme.dark';
import About from '../../src/pages/About';

describe('About page', () => {
  it('renders with a LIGHT theme', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={themeLight}>
          <About />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with a DARK theme', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={themeDark}>
          <About />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
