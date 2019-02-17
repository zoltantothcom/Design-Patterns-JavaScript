import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { restart } from '../actions';

const Results = ({ answers, onClick }) => {
  let correct = 0;
  let wrong = 0;

  answers.map(answer => (answer.correct ? correct++ : wrong++));

  return (
    <div>
      <h2>Results</h2>
      <h1>{Math.ceil((correct * 100) / 23)}%</h1>
      You've got <strong>{correct}</strong> patterns right out of {answers.length}.
      <div>
        <button onClick={onClick}>Try Again</button>
      </div>
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
