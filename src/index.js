import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import style from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark';

SyntaxHighlighter.registerLanguage('javascript', js);

const Title = styled.h1`
  font-family: sans-serif;
  padding: 2em;
  background: papayawhip;
  font-size: 2em;
  text-align: center;
  color: palevioletred;
  margin: 0;
`;

const codeES6 = `
class Pattern {
  constructor(el) {
      this.index = 0;
      this.elements = el;
  }

  next() {
      return this.elements[this.index++];
  }

  hasNext() {
      return this.index < this.elements.length;
  }
}

export default Pattern;

`;

const code = `
function Pattern(el) {
  this.index = 0;
  this.elements = el;
}

Pattern.prototype = {
  next: function() {
      return this.elements[this.index++];
  },
  hasNext: function() {
      return this.index < this.elements.length;
  }
};

module.exports = Pattern;

`;

class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title>JavaScript</Title>
        <SyntaxHighlighter language="javascript" style={style} customStyle={{ fontSize: '1.25rem' }}>
          {code}
        </SyntaxHighlighter>
        ES6
        <SyntaxHighlighter language="javascript" style={style} customStyle={{ fontSize: '1.25rem' }}>
          {codeES6}
        </SyntaxHighlighter>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
