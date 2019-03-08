import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';
import PatternsList from '../../src/components/PatternsList';

describe('REFERENCE - Patterns List', () => {
  it('renders all the patterns', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <PatternsList />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
