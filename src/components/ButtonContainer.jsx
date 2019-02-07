import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const StyledButtonContainer = styled.div`
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  height: 9rem;
  justify-content: space-around;
  margin: 2rem 0;
`;

const ButtonContainer = props => (
  <StyledButtonContainer>
    <Button label="Iterator" theme="secondary" onClick={props.onClick} />
    <Button label="Observer" theme="secondary" onClick={props.onClick} />
    <Button label="Mediator" theme="secondary" onClick={props.onClick} />
    <Button label="Revealing Module" theme="secondary" onClick={props.onClick} />
  </StyledButtonContainer>
);

ButtonContainer.propTypes = {
  big: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  theme: PropTypes.string
};

ButtonContainer.defaultProps = {
  big: false,
  label: 'Save',
  onClick: () => {},
  style: {},
  theme: 'primary'
};

export default ButtonContainer;
