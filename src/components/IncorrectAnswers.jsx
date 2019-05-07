import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAnswers, getPatterns } from '../selectors';
import IncorrectCode from './IncorrectCode';

export const IncorrectAnswers = ({ answers, style }) => {
  const incorrectAnswers = answers.filter(answer => !answer.correct);

  return incorrectAnswers.map(({ uuid }) => (
    <IncorrectCode key={uuid} uuid={uuid} style={style} />
  ));
};

IncorrectAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired
};

export default connect(state => ({
  answers: getAnswers(state),
  patterns: getPatterns(state)
}))(IncorrectAnswers);
