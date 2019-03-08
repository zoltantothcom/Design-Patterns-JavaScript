import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../src/styles/themes/theme.light';
import { themeDark } from '../src/styles/themes/theme.dark';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../src/Layout';

const mockStore = configureMockStore();
const patterns = [
  {
    uuid: 'abc123',
    name: 'Prototype',
    type: 'creational',
    codeES5: 'Code ES5 - Prototype',
    codeES6: 'Code ES6 - Prototype',
    answered: false,
    answerId: null,
    correct: null
  },

  {
    uuid: 'abc234',
    name: 'SIngleton',
    type: 'creational',
    codeES5: 'Code ES5 - Singleton',
    codeES6: 'Code ES6 - Singleton',
    answered: false,
    answerId: null,
    correct: null
  }
];

describe('Layout', () => {
  describe('Header - LIGHT mode', () => {
    let tree;
    const store = mockStore({
      patterns: patterns,
      progress: {
        answers: [],
        remaining: [patterns[1]],
        current: patterns[0]
      },
      intro: false,
      mode: 'light',
      js: 'es5'
    });

    beforeEach(() => {
      tree = mount(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={themeLight}>
              <Layout />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );
    });

    it('has the correct title', () => {
      expect(tree.find('header h1').text()).toMatch('Design Patterns');
    });

    it('renders 2 links', () => {
      expect(tree.find('header a')).toHaveLength(2);
    });

    it('renders 1 span', () => {
      expect(tree.find('header span')).toHaveLength(1);
    });

    it('renders 2 toggle buttons', () => {
      expect(tree.find('Header button')).toHaveLength(2);
    });
  });

  describe('Header - DARK mode', () => {
    let tree;
    const store = mockStore({
      patterns: patterns,
      progress: {
        answers: [],
        remaining: [patterns[1]],
        current: patterns[0]
      },
      intro: false,
      mode: 'dark',
      js: 'es5'
    });

    beforeEach(() => {
      tree = mount(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={themeDark}>
              <Layout />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );
    });

    it('has the correct title', () => {
      expect(tree.find('header h1').text()).toMatch('Design Patterns');
    });

    it('renders 2 links', () => {
      expect(tree.find('header a')).toHaveLength(2);
    });

    it('renders 1 span', () => {
      expect(tree.find('header span')).toHaveLength(1);
    });

    it('renders 2 toggle buttons', () => {
      expect(tree.find('Header button')).toHaveLength(2);
    });
  });
});
