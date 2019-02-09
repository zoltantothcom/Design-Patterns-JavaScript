import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../styles/themes/theme.light';
import { themeDark } from '../styles/themes/theme.dark';

const withThemeProvider = Component => {
  const Sub = ({ mode }) => (
    <ThemeProvider theme={mode === 'dark' ? themeDark : themeLight}>
      <Component />
    </ThemeProvider>
  );

  Sub.propTypes = {
    mode: PropTypes.string.isRequired
  };

  return Sub;
};

const mapStateToProps = ({ mode }) => ({ mode });

const composedWrapper = compose(
  connect(
    mapStateToProps,
    null
  ),
  withThemeProvider
);

export default composedWrapper;
