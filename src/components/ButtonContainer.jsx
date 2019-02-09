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
    <Button label="Iterator" onClick={() => console.log('Iterator')} />
    <Button label="Observer" onClick={props.onClick} />
    <Button label="Mediator" onClick={props.onClick} />
    <Button label="Revealing Module" onClick={props.onClick} />
  </StyledButtonContainer>
);

ButtonContainer.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

ButtonContainer.defaultProps = {
  label: 'Save',
  onClick: () => {}
};

export default ButtonContainer;
