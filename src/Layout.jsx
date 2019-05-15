import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import styleLight from './styles/hljs/hljs.light';
import styleDark from './styles/hljs/hljs.dark';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';
import { themeCommon } from './styles/themes/theme.common';
import { themeLight } from './styles/themes/theme.light';
import { themeDark } from './styles/themes/theme.dark';
import Game from './pages/Game';
import About from './pages/About';
import Patterns from './pages/Patterns';
import { getMode } from './selectors';

const Layout = props => {
  const { mode } = props;

  let style = styleLight;
  let theme = { ...themeCommon, ...themeLight };

  if (props.mode === 'dark') {
    style = styleDark;
    theme = { ...themeCommon, ...themeDark };
  }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle mode={mode} />
        <Header />

        <Switch>
          <Route exact path="/" render={() => <Game style={style} />} />
          <Route path="/patterns" component={Patterns} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>

        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  mode: PropTypes.string.isRequired
};

export default withRouter(
  connect(state => ({
    mode: getMode(state)
  }))(Layout)
);
