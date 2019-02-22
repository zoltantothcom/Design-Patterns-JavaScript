import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getAnswers, getRemaining } from '../selectors';

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
      {answers.map(({ uuid, answered, correct }) => {
        let nature;

        if (answered && correct) {
          nature = 'success';
        } else {
          nature = 'error';
        }

        return <Step key={uuid} nature={nature} />;
      })}

      {remaining.map(({ uuid }) => (
        <Step key={uuid} />
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
