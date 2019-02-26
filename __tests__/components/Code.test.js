import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import themeLight from '../../src/styles/hljs/hljs.light';
import themeDark from '../../src/styles/hljs/hljs.dark';
import Code from '../../src/components/Code';

const mockStore = configureMockStore();
const initialStore = {
  progress: {
    current: {
      uuid: '5',
      answered: false,
      correct: null,
      codeES5: 'JavaScript ES5',
      codeES6: 'JavaScript ES6'
    }
  },
  js: 'es5'
};
const storeES5 = mockStore(initialStore);
const storeES6 = mockStore({ ...initialStore, js: 'es6' });

describe('<Code /> component', () => {
  it('renders ES5 code in LIGHT mode', () => {
    const tree = renderer
      .create(
        <Provider store={storeES5}>
          <Code style={themeLight} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders ES6 code in DARK mode', () => {
    const tree = renderer
      .create(
        <Provider store={storeES6}>
          <Code style={themeDark} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
