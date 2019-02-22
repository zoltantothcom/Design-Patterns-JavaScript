import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { themeCommon } from '../src/styles/themes/theme.common';
import ProgressBar from '../src/components/ProgressBar';

const mockStore = configureMockStore();
const store = mockStore({
  progress: {
    answers: [
      { uuid: 1, answered: true, correct: true },
      { uuid: 2, answered: true, correct: true },
      { uuid: 3, answered: true, correct: true },
      { uuid: 4, answered: true, correct: false }
    ],
    remaining: [
      { uuid: 5, answered: false, correct: null },
      { uuid: 6, answered: false, correct: null },
      { uuid: 7, answered: false, correct: null },
      { uuid: 8, answered: false, correct: null }
    ]
  }
});

describe('<ProgressBar /> component', () => {
  let result;

  beforeEach(() => {
    // the wrapper DIV added to get rid of iterator key warning
    result = shallow(
      <div key="unique">
        <Provider store={store}>
          <ThemeProvider theme={themeCommon}>
            <ProgressBar />
          </ThemeProvider>
        </Provider>
      </div>
    );
  });

  it('renders without crashing', () => {
    expect(result).toBeTruthy();
  });

  it('shows the number of steps', () => {
    const tree = renderer.create(result).toJSON();
    expect(tree.children[0].children.length).toBe(8);
  });

  it('has styled-component rendered classes', () => {
    const tree = renderer.create(result).toJSON();
    // console.log(tree);

    expect(tree.children[0].props.className).toBeDefined();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(result).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
