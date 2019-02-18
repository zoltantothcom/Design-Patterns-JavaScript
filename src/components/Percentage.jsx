import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPercentage = styled.h1`
  border: 4px solid ${props => props.level};
  border-radius: 50%;
  color: ${props => props.level};
  font-family: 'Karla', 'sans-serif';
  font-size: 4rem;
  height: 10rem;
  margin: auto;
  line-height: 10rem;
  text-align: center;
  width: 10rem;
`;

const Percentage = ({ percent }) => {
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

  return <StyledPercentage level={level}>{percent}%</StyledPercentage>;
};

Percentage.propTypes = {
  percent: PropTypes.number.isRequired
};

export default Percentage;
