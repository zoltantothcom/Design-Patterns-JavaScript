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

const possibleAnswers = [];

const ButtonContainer = props => {
  console.log(props);

  possibleAnswers.push(props.current);

  return (
    <StyledButtonContainer>
      {possibleAnswers.map(({ uuid, name }) => (
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
