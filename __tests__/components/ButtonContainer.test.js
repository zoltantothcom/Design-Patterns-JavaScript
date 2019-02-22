import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { ButtonContainer } from '../../src/components/ButtonContainer';
import { submitAnswer } from '../../src/actions/submitAnswer';

const mockStore = configureStore();

const patterns = [
  {
    uuid: 'id_12',
    name: 'Singleton',
    type: 'creational',
    codeES5: `function Person() {
  if (typeof Person.instance === 'object') return Person.instance;

  Person.instance = this;

  return this;
}

module.exports = Person;`,
    codeES6: `class Person {
  constructor() {
    if (typeof Person.instance === 'object') {
      return Person.instance;
    }
    Person.instance = this;
    return this;
  }
}

export default Person;`
  },

  {
    uuid: 'id_34',
    name: 'Singleton',
    type: 'creational',
    codeES5: `function Person() {
  if (typeof Person.instance === 'object') return Person.instance;

  Person.instance = this;

  return this;
}

module.exports = Person;`,
    codeES6: `class Person {
  constructor() {
    if (typeof Person.instance === 'object') {
      return Person.instance;
    }
    Person.instance = this;
    return this;
  }
}

export default Person;`
  },

  {
    uuid: 'id_56',
    name: 'Singleton',
    type: 'creational',
    codeES5: `function Person() {
  if (typeof Person.instance === 'object') return Person.instance;

  Person.instance = this;

  return this;
}

module.exports = Person;`,
    codeES6: `class Person {
  constructor() {
    if (typeof Person.instance === 'object') {
      return Person.instance;
    }
    Person.instance = this;
    return this;
  }
}

export default Person;`
  },

  {
    uuid: 'id_78',
    name: 'Singleton',
    type: 'creational',
    codeES5: `function Person() {
  if (typeof Person.instance === 'object') return Person.instance;

  Person.instance = this;

  return this;
}

module.exports = Person;`,
    codeES6: `class Person {
  constructor() {
    if (typeof Person.instance === 'object') {
      return Person.instance;
    }
    Person.instance = this;
    return this;
  }
}

export default Person;`
  }
];

describe('<ButtonContainer /> dispatch action', () => {
  it('should dispatch action', () => {
    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(submitAnswer('test'));

    // Test if the store dispatched the expected actions
    const actions = store.getActions();

    const expectedPayload = {
      type: 'SUBMIT',
      payload: 'test'
    };
    expect(actions).toEqual([expectedPayload]);
  });
});

describe('<ButtonContainer /> component', () => {
  const mockClick = jest.fn();
  const patternsList = patterns;
  const current = patterns[0];
  const buttonContainerEl = (
    <ButtonContainer patterns={patternsList} current={current} onClick={mockClick} />
  );
  let buttonContainer;

  beforeEach(() => {
    buttonContainer = mount(buttonContainerEl);
  });

  // it('should roll the dice again when button is clicked', () => {
  //   const dispatch = jest.fn();

  //   expect(dispatch.mock.calls[0][0]).toEqual({
  //     type: 'SUBMIT',
  //     payload: 'test'
  //   });
  // });

  // it('should show previously rolled value', () => {
  //   const initialState = {
  //     progress: {
  //       current: 0
  //     },
  //     patterns: [0, 1, 2, 3]
  //   };

  //   expect(mapStateToProps(initialState).patterns).toEqual([0, 1, 2, 3]);
  //   expect(mapStateToProps(initialState).current).toEqual(0);
  // });

  it('renders without crashing', () => {
    expect(buttonContainer).toBeTruthy();
  });

  it('has styled-component rendered classes', () => {
    const tree = renderer.create(buttonContainerEl).toJSON();
    expect(tree.props.className).toBeDefined();
  });

  it('generates 4 buttons', () => {
    expect(buttonContainer.find('button')).toHaveLength(4);
  });

  // it('responds to button click', () => {
  //   buttonContainer
  //     .find('button')
  //     .first()
  //     .simulate('click');

  //   expect(mockClick.mock.calls.length).toEqual(1);
  // });
});
