import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledTitle = styled.h1`
  font-family: sans-serif;
  padding: 2em;
  background: ${props => (props.theme === 'dark' ? '#424242' : '#ffefd5')};
  font-size: 2em;
  text-align: center;
  color: ${props => (props.theme === 'dark' ? '#ff1492' : '#db7093')};
  margin: 0;
`;

const Title = props => {
  const { text, theme } = props;

  return <StyledTitle theme={theme}>{text}</StyledTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};

Title.defaultProps = {
  text: 'JavaScript Patterns',
  theme: 'light'
};

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps)(Title);
