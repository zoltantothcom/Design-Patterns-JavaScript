import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from './Button';
import { submitAnswer } from '../actions/submitAnswer';
import { getCurrent } from '../selectors';

const StyledButtonContainer = styled.div`
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  height: 9rem;
  justify-content: space-around;
  margin: 1rem 0 2rem;
`;

export const ButtonContainer = ({ current, onSubmitAnswer }) => (
  <StyledButtonContainer>
    {current.variants.map(({ uuid, name }) => (
      <Button label={name} id={uuid} key={uuid} onClick={() => onSubmitAnswer(uuid)} />
    ))}
  </StyledButtonContainer>
);

ButtonContainer.propTypes = {
  current: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired
};

export default connect(
  state => ({
    current: getCurrent(state)
  }),
  {
    onSubmitAnswer: id => submitAnswer(id)
  }
)(ButtonContainer);
