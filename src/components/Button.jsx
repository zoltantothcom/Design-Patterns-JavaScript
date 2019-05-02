import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme.buttonBackground};
  border: 1px solid ${props => props.theme.buttonBorder};
  border-radius: 4px;
  cursor: pointer;
  font: 400 1rem 'Karla', 'sans-serif';
  height: 48px;
  max-width: 240px;
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

export const Button = ({ id, label, onClick = () => {}, theme = {} }) => (
  <StyledButton id={id} onClick={onClick} theme={theme}>
    {label && <span>{label}</span>}
  </StyledButton>
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    buttonBackground: PropTypes.string
  })
};

export default Button;
