import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import 'jest-styled-components';
import Pattern from '../../src/components/Pattern';

const mockStore = configureMockStore();

describe('REFERENCE - Pattern component', () => {
  it('renders the individual pattern (Singleton) details in DARK mode', () => {
    const store = mockStore({
      mode: 'dark'
    });
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/patterns/singleton']}>
          <Provider store={store}>
            <Pattern match={{ params: { id: 'singleton' } }} />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('renders the individual pattern (Singleton) details in LIGHT mode', () => {
    const store = mockStore({
      mode: 'light'
    });
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/patterns/singleton']}>
          <Provider store={store}>
            <Pattern match={{ params: { id: 'singleton' } }} />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
