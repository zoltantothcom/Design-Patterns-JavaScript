import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../../src/styles/themes/theme.light';
import { themeDark } from '../../src/styles/themes/theme.dark';
import styleLight from '../../src/styles/hljs/hljs.light';
import styleDark from '../../src/styles/hljs/hljs.dark';
import Game from '../../src/pages/Game';

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

const mockStore = configureMockStore();
const store = mockStore({
  patterns: patterns,
  progress: {
    answers: [],
    remaining: [patterns[1]],
    current: patterns[0]
  },
  mode: 'light',
  js: 'es5'
});

describe('Game page - GAME - LIGHT style', () => {
  let tree;

  beforeEach(() => {
    tree = mount(
      <Provider store={store}>
        <ThemeProvider theme={themeLight}>
          <Game style={styleLight} />
        </ThemeProvider>
      </Provider>
    );
  });

  it('renders a <ProgressBar /> component', () => {
    expect(tree.find('ProgressBar')).toMatchSnapshot();
  });

  it('renders a <Code /> component', () => {
    expect(tree.find('Code')).toMatchSnapshot();
  });

  it('renders the correct code snippet', () => {
    expect(tree.find('Code').text()).toMatch('Code ES5 - Prototype');
  });

  it('renders a <ButtonContainer /> component', () => {
    expect(tree.find('ButtonContainer')).toBeTruthy();
  });

  it('renders <ButtonContainer /> with 2 buttons', () => {
    expect(tree.find('ButtonContainer').find('button')).toHaveLength(2);
  });
});

describe('Game page - GAME - DARK style', () => {
  let tree;

  beforeEach(() => {
    tree = mount(
      <Provider store={store}>
        <ThemeProvider theme={themeDark}>
          <Game style={styleDark} />
        </ThemeProvider>
      </Provider>
    );
  });

  it('renders a <ProgressBar /> component', () => {
    expect(tree.find('ProgressBar')).toMatchSnapshot();
  });

  it('renders a <Code /> component', () => {
    expect(tree.find('Code')).toMatchSnapshot();
  });

  it('renders the correct code snippet', () => {
    expect(tree.find('Code').text()).toMatch('Code ES5 - Prototype');
  });

  it('renders a <ButtonContainer /> component', () => {
    expect(tree.find('ButtonContainer')).toBeTruthy();
  });

  it('renders <ButtonContainer /> with 2 buttons', () => {
    expect(tree.find('ButtonContainer').find('button')).toHaveLength(2);
  });
});

describe('Game page - RESULTS', () => {
  let tree;
  const patterns = [
    {
      uuid: 'abc123',
      name: 'Prototype',
      type: 'creational',
      codeES5: 'Code ES5 - Prototype',
      codeES6: 'Code ES6 - Prototype',
      answered: true,
      answerId: 'abc123',
      correct: true
    },

    {
      uuid: 'abc234',
      name: 'SIngleton',
      type: 'creational',
      codeES5: 'Code ES5 - Singleton',
      codeES6: 'Code ES6 - Singleton',
      answered: true,
      answerId: 'abc123',
      correct: false
    }
  ];
  const store = mockStore({
    patterns: patterns,
    progress: {
      answers: patterns,
      remaining: [],
      current: null
    },
    mode: 'light',
    js: 'es5'
  });

  beforeEach(() => {
    tree = mount(
      <Provider store={store}>
        <ThemeProvider theme={themeLight}>
          <Game style={styleLight} />
        </ThemeProvider>
      </Provider>
    );
  });

  it('renders a <Result /> component', () => {
    expect(tree.find('Result')).toMatchSnapshot();
  });

  it('renders a <Percentage /> component', () => {
    expect(tree.find('Percentage')).toMatchSnapshot();
  });

  it('renders the correct percentage', () => {
    expect(tree.find('Percentage').text()).toMatch('5%');
  });

  it('renders a <Restart /> component', () => {
    expect(tree.find('ButtonContainer')).toMatchSnapshot();
  });

  it('reacts to button click', () => {
    tree.find('button').simulate('click');
    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: 'RESTART' }]);
  });
});
