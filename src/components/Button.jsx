import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { themeLight } from '../styles/themes/theme.light';
import { themeDark } from '../styles/themes/theme.dark';

const StyledButton = styled.button`
  background-color: ${props => props.theme.buttonBackground};
  border-color: ${props => props.theme.buttonBorder};
  border-radius: 4px;
  cursor: pointer;
  font: 400 1rem 'Montserrat', 'sans-serif';
  height: 48px;
  outline: none;
  padding: 0 1.5rem;
  width: 37.5%;

  & span {
    color: ${props => props.theme.buttonColor};
  }

  &:hover {
    background-color: ${props => props.theme.buttonBackgroundHover};
    border-color: ${props => props.theme.buttonBorderHover};

    & span {
      color: ${props => props.theme.buttonColorHover};
    }
  }
`;

const Button = props => {
  const { mode, onClick, label } = props;

  return (
    <ThemeProvider theme={mode === 'dark' ? themeDark : themeLight}>
      <StyledButton onClick={onClick}>{label && <span>{label}</span>}</StyledButton>
    </ThemeProvider>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

Button.defaultProps = {
  label: 'Button',
  onClick: () => {},
  mode: 'light'
};

const mapStateToProps = ({ mode }) => ({ mode });

export default connect(mapStateToProps)(Button);
