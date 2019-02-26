import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../../src/styles/themes/theme.light';
import { themeDark } from '../../src/styles/themes/theme.dark';
import GlobalStyle from '../../src/styles/global';

describe('Global style', () => {
  it('renders with a LIGHT theme', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={themeLight}>
          <body>
            <GlobalStyle />
            <div id="root">TEST</div>
          </body>
        </ThemeProvider>
      )
      .toTree();

    expect(
      tree.instance._reactInternalFiber.child.child.child.child.stateNode.styleSheet.target
    ).toMatchSnapshot();
  });

  it('renders with a DARK theme', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={themeDark}>
          <body>
            <GlobalStyle />
            <div id="root">TEST</div>
          </body>
        </ThemeProvider>
      )
      .toTree();

    expect(
      tree.instance._reactInternalFiber.child.child.child.child.stateNode.styleSheet.target
    ).toMatchSnapshot();
  });
});
