import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Title from '../src/components/Title';
import { renderWithLightTheme } from './helpers';
import { renderWithDarkTheme } from './helpers';

describe('<Title /> component', () => {
  let titleEl = <Title />;
  let title;

  beforeEach(() => {
    title = shallow(titleEl);
  });

  it('renders without crashing', () => {
    expect(title).toBeTruthy();
  });

  it('has styled-component rendered classes', () => {
    const tree = renderer.create(titleEl).toJSON();
    expect(tree.props.className).toBeDefined();
  });

  it('renders with a LIGHT theme', () => {
    const tree = renderWithLightTheme(titleEl).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with a DARK theme', () => {
    const tree = renderWithDarkTheme(titleEl).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
