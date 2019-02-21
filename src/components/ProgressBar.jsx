import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import getAnswers from '../selectors/getAnswers';
import getRemaining from '../selectors/getRemaining';

const Container = styled.div`
  display: flex;
  height: 3px;
  justify-content: space-between;
  margin: 1.25rem 0 1rem;
  width: 100%;
`;

const Step = styled.span`
  background: ${props => (props.nature ? props.theme[props.nature] : props.theme.lightGrey)};
  display: flex;
  height: 2px;
  width: 3.75%;
`;

export const ProgressBar = props => {
  const { answers, remaining } = props;

  return (
    <Container>
      {answers.map(pattern => {
        let nature;

        if (pattern.answered) {
          nature = pattern.correct ? 'success' : 'error';
        }

        return <Step key={pattern.uuid} nature={nature} />;
      })}

      {remaining.map(pattern => (
        <Step key={pattern.uuid} />
      ))}
    </Container>
  );
};

ProgressBar.propTypes = {
  answers: PropTypes.array.isRequired,
  remaining: PropTypes.array.isRequired
};

export default connect(state => ({
  answers: getAnswers(state),
  remaining: getRemaining(state)
}))(ProgressBar);
