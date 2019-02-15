import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from './Button';

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

  const allOtherAnswers = patterns.filter(pattern => pattern.uuid !== current.uuid);
  // Shuffle array
  const shuffled = allOtherAnswers.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, 3);

  const variants = [current, ...selected];

  variants.sort(() => 0.5 - Math.random());

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
