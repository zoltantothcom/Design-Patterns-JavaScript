import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { restart } from '../actions';
import Button from './Button';

const Percentage = styled.h1`
  border: 4px solid ${props => props.level};
  border-radius: 50%;
  color: ${props => props.level};
  font-size: 4rem;
  height: 10rem;
  margin: auto;
  line-height: 10rem;
  text-align: center;
  width: 10rem;
`;

const Info = styled.p`
  color: ${props => props.theme.buttonBorderHover};
  margin: 3rem 0;
  text-align: center;
`;

const Restart = styled.div`
  margin: 3rem 4rem;
  text-align: center;
`;

const Results = ({ answers, onClick }) => {
  let correct = 0;
  let wrong = 0;

  answers.map(answer => (answer.correct ? correct++ : wrong++));

  const percent = Math.ceil((correct * 100) / 23);
  let level = 'red';

  switch (true) {
  case percent >= 80:
    level = 'green';
    break;
  case percent >= 60:
    level = 'gold';
    break;
  case percent >= 40:
    level = 'orange';
    break;
  }

  return (
    <div>
      <Info>
        You've got <strong>{correct}</strong> patterns right out of {answers.length}.
      </Info>
      <Percentage level={level}>{percent}%</Percentage>
      <Restart>
        <Button label="Try Again" id="try_again" onClick={onClick} />
      </Restart>
    </div>
  );
};

Results.propTypes = {
  answers: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = ({ progress: { answers } }) => ({ answers });

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(restart());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
