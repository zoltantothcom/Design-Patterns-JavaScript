import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { themeLight } from '../../src/styles/themes/theme.light';
import { themeDark } from '../../src/styles/themes/theme.dark';
import GlobalStyle from '../../src/styles/global';

describe('Global style', () => {
  it('renders with a LIGHT theme', () => {
    renderer.create(<GlobalStyle theme={themeLight} />);
    expect(document.head).toMatchSnapshot();
  });

  it('renders with a DARK theme', () => {
    renderer.create(<GlobalStyle theme={themeDark} />);
    expect(document.head).toMatchSnapshot();
  });
});
