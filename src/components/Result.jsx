import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getAnswers } from '../selectors';

const StyledResult = styled.p`
  color: ${props => props.theme.text};
  margin: 3rem 0;
  text-align: center;
`;

export const Result = ({ answers }) => {
  let correct = 0;

  answers.map(answer => (answer.correct ? correct++ : null));

  return (
    <StyledResult>
      You got <strong>{correct}</strong> patterns right out of {answers.length}.
    </StyledResult>
  );
};

Result.propTypes = {
  answers: PropTypes.array.isRequired
};

export default connect(state => ({
  answers: getAnswers(state)
}))(Result);
