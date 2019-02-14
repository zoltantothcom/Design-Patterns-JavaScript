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
    {props.possibleAnswers.map(answer => (
      <Button label={answer} id={answer} key={answer} />
    ))}
  </StyledButtonContainer>
);

ButtonContainer.propTypes = {
  possibleAnswers: PropTypes.array.isRequired
};

ButtonContainer.defaultProps = {
  possibleAnswers: ['0', '1', '2', '3']
};

export default ButtonContainer;
