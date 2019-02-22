import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { themeCommon } from '../src/styles/themes/theme.common';
import Percentage from '../src/components/Percentage';

const mockStore = configureMockStore();
const storeUnder40 = mockStore({
  progress: {
    answers: [{ correct: true }]
  }
});
const storeUnder70 = mockStore({
  progress: {
    answers: [
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true }
    ]
  }
});
const storeOver70 = mockStore({
  progress: {
    answers: [
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: true },
      { correct: false },
      { correct: true }
    ]
  }
});

describe('<Percentage /> component', () => {
  let result;

  beforeEach(() => {
    // the wrapper DIV added to get rid of iterator key warning
    result = shallow(
      <div key="unique">
        <Provider store={storeUnder40}>
          <ThemeProvider theme={themeCommon}>
            <Percentage />
          </ThemeProvider>
        </Provider>
      </div>
    );
  });

  it('renders without crashing', () => {
    expect(result).toBeTruthy();
  });

  it('shows the percentage of correct answers', () => {
    const expected = '5%';
    expect(result.html()).toEqual(expect.stringContaining(expected));
  });

  it('shows the percentage under 40% in red', () => {
    const tree = renderer.create(result).toJSON();
    expect(tree.children[0]).toHaveStyleRule('color', 'red');
  });

  it('shows the percentage under 70% in orange', () => {
    result = shallow(
      <div key="unique">
        <Provider store={storeUnder70}>
          <ThemeProvider theme={themeCommon}>
            <Percentage />
          </ThemeProvider>
        </Provider>
      </div>
    );
    const tree = renderer.create(result).toJSON();
    expect(tree.children[0]).toHaveStyleRule('color', 'orange');
  });

  it('shows the percentage over 70% in green', () => {
    result = shallow(
      <div key="unique">
        <Provider store={storeOver70}>
          <ThemeProvider theme={themeCommon}>
            <Percentage />
          </ThemeProvider>
        </Provider>
      </div>
    );
    const tree = renderer.create(result).toJSON();
    expect(tree.children[0]).toHaveStyleRule('color', 'limegreen');
  });

  it('has styled-component rendered classes', () => {
    const tree = renderer.create(result).toJSON();
    expect(tree.children[0].props.className).toBeDefined();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(result).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
