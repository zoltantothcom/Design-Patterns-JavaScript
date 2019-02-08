import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { themeLight } from '../styles/themes/theme.light';
import { themeDark } from '../styles/themes/theme.dark';

const StyledTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  padding: 2em;
  background: ${props => props.theme.background};
  font-size: 2em;
  text-align: center;
  color: #e22a23;
  margin: 0;
`;

export const Title = props => {
  const { text, mode } = props;

  return (
    <ThemeProvider theme={mode === 'dark' ? themeDark : themeLight}>
      <StyledTitle>{text}</StyledTitle>
    </ThemeProvider>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
};

Title.defaultProps = {
  text: 'JavaScript Design Patterns',
  mode: 'dark'
};

const mapStateToProps = ({ mode }) => ({ mode });

export default connect(mapStateToProps)(Title);
