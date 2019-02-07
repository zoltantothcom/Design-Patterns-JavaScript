import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  font: 400 1rem 'Montserrat', 'sans-serif';
  height: 48px;
  outline: none;
  padding: 0 1.5rem;
  width: 37.5%;

  &.primary {
    background-color: #1585d8;
    & span {
      color: white;
    }
  }

  &.secondary {
    background-color: #e22a23;
    & span {
      color: #ffffff;
    }

    &:hover {
      background-color: #ffffff;
      & span {
        color: #222222;
      }
    }
  }
`;

const Button = props => (
  <StyledButton big={props.big} className={props.theme} onClick={props.onClick} style={props.style}>
    {props.label && <span>{props.label}</span>}
  </StyledButton>
);

Button.propTypes = {
  big: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  theme: PropTypes.string
};

Button.defaultProps = {
  big: false,
  label: 'Save',
  onClick: () => {},
  style: {},
  theme: 'primary'
};

export default Button;
