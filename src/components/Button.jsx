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
    border-color: ${props => props.theme.buttonBorderHover};
    background-color: ${props => props.theme.buttonBackgroundHover};

    & span {
      color: ${props => props.theme.buttonColorHover};
    }
  }
`;

const Button = props => {
  const { mode } = props;

  return (
    <ThemeProvider theme={mode === 'dark' ? themeDark : themeLight}>
      <StyledButton big={props.big} onClick={props.onClick} style={props.style}>
        {props.label && <span>{props.label}</span>}
      </StyledButton>
    </ThemeProvider>
  );
};

Button.propTypes = {
  big: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  mode: PropTypes.string.isRequired
};

Button.defaultProps = {
  big: false,
  label: 'Save',
  onClick: () => {},
  style: {}
};

const mapStateToProps = ({ mode }) => ({ mode });

export default connect(mapStateToProps)(Button);
