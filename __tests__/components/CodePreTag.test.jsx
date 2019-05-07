import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import CodePreTag from '../../src/components/CodePreTag';

describe('<CodePreTag /> component', () => {
  it('renders children properly', () => {
    const tree = renderer
      .create(
        <CodePreTag>
          <code>
            {`function foo() {
            return 'bar';
          }`}
          </code>
        </CodePreTag>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
