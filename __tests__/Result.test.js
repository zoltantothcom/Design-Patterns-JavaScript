import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Result from '../src/components/Result';

describe('<Result /> component', () => {
  const mockClick = jest.fn();
  const answers = [{ correct: true }, { correct: true }, { correct: true }, { correct: false }];
  const resultEl = <Result answers={answers} onRestart={mockClick} />;
  let result;

  beforeEach(() => {
    result = shallow(resultEl);
  });

  it('renders without crashing', () => {
    expect(result).toBeTruthy();
  });
});
