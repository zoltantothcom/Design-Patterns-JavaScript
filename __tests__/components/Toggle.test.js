import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../../src/styles/themes/theme.light';
import { themeDark } from '../../src/styles/themes/theme.dark';
import 'jest-styled-components';
import Toggle from '../../src/components/Toggle';

const mockClick = jest.fn();
const mockStore = configureMockStore();

describe('<Toggle />', () => {
  const store = mockStore({
    js: 'es5',
    mode: 'dark'
  });

  it('renders JS toggle in LIGHT more', () => {
    const tree = renderer.create(
      <div key="unique">
        <Provider store={store}>
          <ThemeProvider theme={themeLight}>
            <Toggle control="js" mode="light" onToggle={mockClick} />
          </ThemeProvider>
        </Provider>
      </div>
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders the MODE toggle in LIGHT mode', () => {
    const tree = renderer.create(
      <div key="unique">
        <Provider store={store}>
          <ThemeProvider theme={themeLight}>
            <Toggle control="mode" mode="light" onToggle={mockClick} />
          </ThemeProvider>
        </Provider>
      </div>
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders JS toggle in DARK more', () => {
    const tree = renderer.create(
      <div key="unique">
        <Provider store={store}>
          <ThemeProvider theme={themeLight}>
            <Toggle control="js" mode="dark" onToggle={mockClick} />
          </ThemeProvider>
        </Provider>
      </div>
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders the MODE toggle in DARK mode', () => {
    const tree = renderer.create(
      <div key="unique">
        <Provider store={store}>
          <ThemeProvider theme={themeLight}>
            <Toggle control="mode" mode="dark" onToggle={mockClick} />
          </ThemeProvider>
        </Provider>
      </div>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('<Toggle> actions', () => {
  it('toggles MODE to LIGHT', () => {
    const store = mockStore({
      js: 'es5',
      mode: 'dark'
    });

    const toggle = mount(
      <div key="unique">
        <Provider store={store}>
          <ThemeProvider theme={themeDark}>
            <Toggle control="mode" onToggle={mockClick} />
          </ThemeProvider>
        </Provider>
      </div>
    );
    toggle.find('button').simulate('click');

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: 'TOGGLE', payload: 'mode' }]);
  });

  it('toggles MODE to DARK', () => {
    const store = mockStore({
      js: 'es5',
      mode: 'light'
    });

    const toggle = mount(
      <div key="unique">
        <Provider store={store}>
          <ThemeProvider theme={themeLight}>
            <Toggle control="mode" onToggle={mockClick} />
          </ThemeProvider>
        </Provider>
      </div>
    );
    toggle.find('button').simulate('click');

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: 'TOGGLE', payload: 'mode' }]);
  });

  it('toggles JS to ES6', () => {
    const store = mockStore({
      js: 'es5',
      mode: 'light'
    });

    const toggle = mount(
      <div key="unique">
        <Provider store={store}>
          <ThemeProvider theme={themeLight}>
            <Toggle control="js" onToggle={mockClick} />
          </ThemeProvider>
        </Provider>
      </div>
    );
    toggle.find('button').simulate('click');

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: 'TOGGLE', payload: 'js' }]);
  });

  it('toggles JS to ES5', () => {
    const store = mockStore({
      js: 'es6',
      mode: 'light'
    });

    const toggle = mount(
      <div key="unique">
        <Provider store={store}>
          <ThemeProvider theme={themeLight}>
            <Toggle control="js" onToggle={mockClick} />
          </ThemeProvider>
        </Provider>
      </div>
    );
    toggle.find('button').simulate('click');

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: 'TOGGLE', payload: 'js' }]);
  });
});
