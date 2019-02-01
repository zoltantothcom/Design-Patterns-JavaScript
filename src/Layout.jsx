import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import style from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark';
import ToggleButton from './components/ToggleButton';

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

const Layout = props => (
  <React.Fragment>
    <Title>JavaScript</Title>
    <ToggleButton />
    {props.js === 'es5' && (
      <SyntaxHighlighter language="javascript" style={style} customStyle={{ fontSize: '1.25rem' }}>
        {code}
      </SyntaxHighlighter>
    )}

    {props.js === 'es6' && (
      <SyntaxHighlighter language="javascript" style={style} customStyle={{ fontSize: '1.25rem' }}>
        {codeES6}
      </SyntaxHighlighter>
    )}
  </React.Fragment>
);

Layout.propTypes = {
  js: PropTypes.string.isRequired
};

const mapStateToProps = ({ js }) => ({ js });

export default connect(mapStateToProps)(Layout);
