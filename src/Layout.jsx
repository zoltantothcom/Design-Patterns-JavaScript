import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import styleLight from './styles/hljs/hljs.light';
import styleDark from './styles/hljs/hljs.dark';
import ToggleButton from './components/ToggleButton';
import ButtonContainer from './components/ButtonContainer';
import Title from './components/Title';
import ProgressBar from './components/ProgressBar';
import GlobalStyle from './styles/global';
import { themeLight } from './styles/themes/theme.light';
import { themeDark } from './styles/themes/theme.dark';
import patterns from './data/patterns';

SyntaxHighlighter.registerLanguage('javascript', js);

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
        <ToggleButton control="js" />
        <ToggleButton control="mode" />
        <Title />
        <ProgressBar />
        {props.js === 'es5' && (
          <SyntaxHighlighter language="javascript" style={style}>
            {patterns[5].codeES5}
          </SyntaxHighlighter>
        )}

        {props.js === 'es6' && (
          <SyntaxHighlighter language="javascript" style={style}>
            {patterns[5].codeES6}
          </SyntaxHighlighter>
        )}
        <ButtonContainer />
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
