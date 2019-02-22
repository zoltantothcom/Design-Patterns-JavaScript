import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from './Button';
import { submitAnswer } from '../actionCreators/submitAnswer';
import getCurrent from '../selectors/getCurrent';
import getPatterns from '../selectors/getPatterns';
import { shuffle } from '../helpers/shuffleArray';

const StyledButtonContainer = styled.div`
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  height: 9rem;
  justify-content: space-around;
  margin: 1rem 0 2rem;
`;

export const ButtonContainer = props => {
  const { current, patterns, onSubmitAnswer } = props;

  // get 3 random patterns in addition to correct one
  const allOtherAnswers = patterns.filter(pattern => pattern.uuid !== current.uuid);
  const additional = shuffle(allOtherAnswers).slice(0, 3);
  // shuffle the 4 answers
  const variants = shuffle([current, ...additional]);

  return (
    <StyledButtonContainer>
      {variants.map(({ uuid, name }) => (
        <Button label={name} id={uuid} key={uuid} onClick={() => onSubmitAnswer(uuid)} />
      ))}
    </StyledButtonContainer>
  );
};

ButtonContainer.propTypes = {
  patterns: PropTypes.array.isRequired,
  current: PropTypes.object.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired
};

export default connect(
  state => ({
    current: getCurrent(state),
    patterns: getPatterns(state)
  }),
  {
    onSubmitAnswer: id => submitAnswer(id)
  }
)(ButtonContainer);
