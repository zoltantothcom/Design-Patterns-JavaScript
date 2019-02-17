import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Results = ({ answers }) => {
  let correct = 0;
  let wrong = 0;

  answers.map(answer => (answer.correct ? correct++ : wrong++));

  return (
    <div>
      <h2>Results</h2>
      You've got <strong>{correct}</strong> patterns right and <strong>{wrong}</strong> wrong.
    </div>
  );
};

Results.propTypes = {
  answers: PropTypes.array.isRequired
};

const mapStateToProps = ({ progress: { answers } }) => ({ answers });

export default connect(mapStateToProps)(Results);
