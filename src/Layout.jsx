import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import lightStyle from 'react-syntax-highlighter/dist/styles/hljs/atom-one-light';
import darkStyle from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark';
import ToggleButton from './components/ToggleButton';
import Title from './components/Title';

SyntaxHighlighter.registerLanguage('javascript', js);

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

const Layout = props => {
  const style = props.theme === 'dark' ? darkStyle : lightStyle;

  return (
    <React.Fragment>
      <Title />
      <ToggleButton state="js" />
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
};

Layout.propTypes = {
  js: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};

const mapStateToProps = ({ js, theme }) => ({ js, theme });

export default connect(mapStateToProps)(Layout);
