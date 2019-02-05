import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import styleLight from './styles/hljs/hljs.light';
import styleDark from './styles/hljs/hljs.dark';
import ToggleButton from './components/ToggleButton';
import Title from './components/Title';
import GlobalStyle from './styles/global';
import { themeLight } from './styles/themes/theme.light';
import { themeDark } from './styles/themes/theme.dark';

SyntaxHighlighter.registerLanguage('javascript', js);

const codeES6 = `class Pattern {
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

const code = `function Pattern(el) {
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
  let style = styleLight;
  let theme = themeLight;

  if (props.mode === 'dark') {
    style = styleDark;
    theme = themeDark;
  }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle mode={props.mode} />
        <Title />
        <ToggleButton control="js" />
        <ToggleButton control="mode" />
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
    </ThemeProvider>
  );
};

Layout.propTypes = {
  js: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
};

const mapStateToProps = ({ js, mode }) => ({ js, mode });

export default connect(mapStateToProps)(Layout);
