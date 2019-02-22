import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { restart } from '../actionCreators/restart';
import getAnswers from '../selectors/getAnswers';
import Button from './Button';
import Percentage from './Percentage';

const Info = styled.p`
  color: ${props => props.theme.buttonBorderHover};
  margin: 3rem 0;
  text-align: center;
`;

const Restart = styled.div`
  margin: 3rem 4rem;
  text-align: center;
`;

const Results = ({ answers, onRestart }) => {
  let correct = 0;
  let wrong = 0;

  answers.map(answer => (answer.correct ? correct++ : wrong++));

  const percent = Math.ceil((correct * 100) / 23);

  return (
    <div>
      <Info>
        You've got <strong>{correct}</strong> patterns right out of {answers.length}.
      </Info>
      <Percentage percent={percent} />
      <Restart>
        <Button label="Try Again" id="try_again" onClick={onRestart} />
      </Restart>
    </div>
  );
};

Results.propTypes = {
  answers: PropTypes.array.isRequired,
  onRestart: PropTypes.func.isRequired
};

export default connect(
  state => ({
    answers: getAnswers(state)
  }),
  {
    onRestart: () => restart()
  }
)(Results);
