import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import 'jest-styled-components';
import Patterns from '../../src/pages/Patterns';

const mockStore = configureMockStore();
const store = mockStore({
  mode: 'dark'
});

describe('Patterns page', () => {
  it('renders the Patterns list', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/patterns']}>
          <Patterns />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the individual Pattern (Singleton) info', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/patterns/singleton']}>
          <Provider store={store}>
            <Patterns />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
