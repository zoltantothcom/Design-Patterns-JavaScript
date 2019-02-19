import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/components/Button';

describe('Button component', () => {
  const mockClick = jest.fn();
  let button;

  beforeEach(() => {
    button = shallow(<Button label="Test Button" id="test" onClick={mockClick} />);
  });

  it('renders without crashing', () => {
    expect(button).toBeTruthy();
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
