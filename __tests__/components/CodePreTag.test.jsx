import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import CodePreTag from '../../src/components/CodePreTag';

describe('<CodePreTag /> component', () => {
  it('renders children properly', () => {
    const codeToRender = `
      function foo() {
        return 'bar';
      }
    `;
    const tree = renderer
      .create(
        <CodePreTag>
          <code>{codeToRender}</code>
        </CodePreTag>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
