import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledPattern = styled.div``;

const Pattern = props => {
  return (
    <StyledPattern>
      <Link to="/patterns">Back to Patterns List</Link>
      <h1>{props.match.params.id}</h1>
    </StyledPattern>
  );
};

export default Pattern;
