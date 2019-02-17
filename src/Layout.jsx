import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import styleLight from './styles/hljs/hljs.light';
import styleDark from './styles/hljs/hljs.dark';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import { themeCommon } from './styles/themes/theme.common';
import { themeLight } from './styles/themes/theme.light';
import { themeDark } from './styles/themes/theme.dark';
import Game from './pages/Game';
import About from './pages/About';

const Layout = props => {
  const { mode } = props;

  let style = styleLight;
  let theme = { ...themeCommon, ...themeLight };

  if (props.mode === 'dark') {
    style = styleDark;
    theme = { ...themeCommon, ...themeDark };
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle mode={mode} />
          <Header />

          <Route exact path="/" render={props => <Game {...props} style={style} />} />
          <Route path="/about" component={About} />
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
};

Layout.propTypes = {
  mode: PropTypes.string.isRequired
};

const mapStateToProps = ({ mode }) => ({ mode });

export default connect(mapStateToProps)(Layout);
