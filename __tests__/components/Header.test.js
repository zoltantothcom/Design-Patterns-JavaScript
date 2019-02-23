import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../../src/styles/themes/theme.light';
import { themeDark } from '../../src/styles/themes/theme.dark';
import 'jest-styled-components';
import Header from '../../src/components/Header';

const mockStore = configureMockStore();
const store = mockStore({
  js: 'es5',
  mode: 'dark'
});

describe('<Header /> component', () => {
  it('renders with LIGHT theme', () => {
    const header = shallow(
      <div key="unique">
        <Router>
          <Provider store={store}>
            <ThemeProvider theme={themeLight}>
              <Header />
            </ThemeProvider>
          </Provider>
        </Router>
      </div>
    );
    const tree = renderer.create(header).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with DARK theme', () => {
    const header = shallow(
      <div key="unique">
        <Router>
          <Provider store={store}>
            <ThemeProvider theme={themeDark}>
              <Header />
            </ThemeProvider>
          </Provider>
        </Router>
      </div>
    );
    const tree = renderer.create(header).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
