import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SVG from '../../src/components/SVG';

const mockStore = configureMockStore();

describe('<SVG /> component', () => {
  it('renders JS control', () => {
    const store = mockStore({
      mode: 'dark'
    });

    const result = shallow(
      <div key="unique">
        <Provider store={store}>
          <SVG control="js" />
        </Provider>
      </div>
    );
    const tree = renderer.create(result).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders MODE control in DARK mode ', () => {
    const store = mockStore({
      mode: 'dark'
    });

    const result = shallow(
      <div key="unique">
        <Provider store={store}>
          <SVG control="mode" />
        </Provider>
      </div>
    );
    const tree = renderer.create(result).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders MODE control in LIGHT mode ', () => {
    const store = mockStore({
      mode: 'light'
    });

    const result = shallow(
      <div key="unique">
        <Provider store={store}>
          <SVG control="mode" />
        </Provider>
      </div>
    );
    const tree = renderer.create(result).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
