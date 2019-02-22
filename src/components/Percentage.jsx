import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getAnswers } from '../selectors';

const StyledPercentage = styled.h1`
  border: 4px solid ${props => props.level};
  border-radius: 50%;
  color: ${props => props.level};
  font-family: 'Karla', 'sans-serif';
  font-size: 4rem;
  height: 10rem;
  margin: auto;
  line-height: 10rem;
  text-align: center;
  width: 10rem;
`;

const Percentage = ({ answers }) => {
  let level = 'red';
  let correct = 0;
  let wrong = 0;

  answers.map(answer => (answer.correct ? correct++ : wrong++));

  const percent = Math.ceil((correct * 100) / 23);

  switch (true) {
  case percent >= 70:
    level = 'limegreen';
    break;
  case percent >= 40:
    level = 'orange';
    break;
  }

  return <StyledPercentage level={level}>{percent}%</StyledPercentage>;
};

Percentage.propTypes = {
  answers: PropTypes.array.isRequired
};

export default connect(state => ({
  answers: getAnswers(state)
}))(Percentage);
