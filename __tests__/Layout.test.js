import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Route, Router, withRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Layout from '../src/Layout';

const mockStore = configureMockStore();
const store = mockStore({
  mode: 'dark',
  js: 'es5'
});

it('renders without crashing', () => {
  shallow(<Layout />);
});

it('renders in DARK more', () => {
  console.log(shallow(<Layout />).debug());

  const renderer = new ShallowRenderer();
  renderer.render(<Layout />);
  const result = renderer.getRenderOutput();

  console.log(result.props.children);

  // const tree = ShallowRenderer(
  //   <Provider store={store}>
  //     <Router>
  //       <Layout />
  //     </Router>
  //   </Provider>
  // ).toJSON();
  // console.log(tree.debug());
  // expect(tree).toMatchSnapshot();
});
