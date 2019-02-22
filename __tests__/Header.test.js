import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Header from '../src/components/Header';

describe('<Header /> component', () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  it('renders without crashing', () => {
    expect(header).toBeTruthy();
  });
});
