import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import styleLight from './styles/hljs/hljs.light';
import styleDark from './styles/hljs/hljs.dark';
import ToggleButton from './components/ToggleButton';
import Title from './components/Title';
import GlobalStyle from './styles/global';
import { themeLight } from './styles/themes/theme.light';
import { themeDark } from './styles/themes/theme.dark';
import Game from './pages/Game';
import About from './pages/About';

const Layout = props => {
  const { mode } = props;

  let style = styleLight;
  let theme = themeLight;

  if (props.mode === 'dark') {
    style = styleDark;
    theme = themeDark;
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle mode={mode} />

          <Link to="/">Game</Link>
          <Link to="/about">About</Link>

          <Route exact path="/" render={() => <ToggleButton control="js" />} />
          <ToggleButton control="mode" />

          <Title />

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
