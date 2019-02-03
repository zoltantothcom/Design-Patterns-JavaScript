import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: ${props => (props.big ? 46 : 36)}px;
  outline: none;
  padding: 0 20px;
  border-radius: 4px;

  &.primary {
    background-color: #1585d8;
    & span {
      color: white;
    }
  }

  &.secondary {
    background-color: #eff3f6;
    & span {
      color: grey;
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
