import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import 'jest-styled-components';
import Result from '../src/components/Result';

const mockStore = configureMockStore();
const store = mockStore({
  progress: {
    answers: [
      { id: 1, correct: true },
      { id: 2, correct: true },
      { id: 3, correct: true },
      { id: 4, correct: false }
    ]
  }
});

describe('<Result /> component', () => {
  let result;

  beforeEach(() => {
    // the wrapper DIV added to get rid of iterator key warning
    result = shallow(
      <div key="key">
        <Provider store={store} key="unique">
          <Result key="result" />
        </Provider>
      </div>
    );
  });

  it('renders without crashing', () => {
    expect(result).toBeTruthy();
  });

  it('shows the number of correct answers', () => {
    const expected = '<strong>3</strong> patterns right out of 4.';
    expect(result.html()).toEqual(expect.stringContaining(expected));
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
