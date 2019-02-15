import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from './Button';
import { shuffle } from '../helpers/shuffleArray';

const StyledButtonContainer = styled.div`
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  height: 9rem;
  justify-content: space-around;
  margin: 2rem 0;
`;

const ButtonContainer = props => {
  const { current, patterns } = props;

  // get 3 random patterns in addition to correct one
  const allOtherAnswers = patterns.filter(pattern => pattern.uuid !== current.uuid);
  const additional = shuffle(allOtherAnswers).slice(0, 3);
  // shuffle the 4 answers
  const variants = shuffle([current, ...additional]);

  return (
    <StyledButtonContainer>
      {variants.map(({ uuid, name }) => (
        <Button label={name} id={uuid} key={uuid} />
      ))}
    </StyledButtonContainer>
  );
};

ButtonContainer.propTypes = {
  patterns: PropTypes.array.isRequired,
  current: PropTypes.object.isRequired
};

const mapStateToProps = ({ progress: { current }, patterns }) => ({ patterns, current });

export default connect(mapStateToProps)(ButtonContainer);
