import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import 'jest-styled-components';
import ButtonContainer, {
  ButtonContainer as NotConnectedButtonContainer
} from '../../src/components/ButtonContainer';
import { answers } from '../../src/store';

describe('<ButtonContainer /> connected', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    patterns: answers,
    progress: {
      current: answers[0]
    }
  });
  it('renders without crashing and responds to button click', () => {
    const container = mount(
      <div key="unique">
        <Provider store={store}>
          <ButtonContainer />
        </Provider>
      </div>
    );
    expect(container).toBeTruthy();

    container
      .find('button')
      .first()
      .simulate('click');

    const actions = store.getActions();
    expect(actions).toMatchObject([{ type: 'SUBMIT' }]);
  });
});

describe('<ButtonContainer /> component', () => {
  const mockClick = jest.fn();
  const buttonContainerEl = (
    <NotConnectedButtonContainer
      patterns={answers}
      current={answers[0]}
      onSubmitAnswer={mockClick}
    />
  );
  let buttonContainer;

  beforeEach(() => {
    buttonContainer = mount(buttonContainerEl);
  });

  it('has styled-component rendered classes', () => {
    const tree = renderer.create(buttonContainerEl).toJSON();
    expect(tree.props.className).toBeDefined();
  });

  it('generates 4 buttons', () => {
    expect(buttonContainer.find('button')).toHaveLength(4);
  });

  it('responds to button click', () => {
    buttonContainer
      .find('button')
      .first()
      .simulate('click');

    expect(mockClick.mock.calls.length).toEqual(1);
  });
});
