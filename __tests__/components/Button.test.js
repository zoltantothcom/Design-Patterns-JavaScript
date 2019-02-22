import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Button from '../../src/components/Button';
import { renderWithLightTheme } from '../helpers';
import { renderWithDarkTheme } from '../helpers';

describe('<Button /> component', () => {
  const mockClick = jest.fn();
  const buttonEl = <Button label="Test Button" id="test" onClick={mockClick} />;
  let button;

  beforeEach(() => {
    button = shallow(buttonEl);
  });

  it('renders without crashing', () => {
    expect(button).toBeTruthy();
  });

  it('has styled-component rendered classes', () => {
    const tree = renderer.create(buttonEl).toJSON();
    expect(tree.props.className).toBeDefined();
  });

  it('renders with a LIGHT theme', () => {
    const tree = renderWithLightTheme(buttonEl).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with a DARK theme', () => {
    const tree = renderWithDarkTheme(buttonEl).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has the passed label', () => {
    const buttonChilren = button.getElement().props.children;

    expect(buttonChilren.type).toBe('span');
    expect(buttonChilren.props.children).toEqual('Test Button');
  });

  it('has the passed id', () => {
    expect(button.getElement().props.id).toEqual('test');
  });

  it('responds to click event', () => {
    button.simulate('click');
    expect(mockClick.mock.calls.length).toEqual(1);
  });
});
