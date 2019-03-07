import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledPatterns = styled.div``;

const PatternsList = () => {
  return (
    <StyledPatterns>
      <h1>LIST OF PATTERNS</h1>
      <Link to="/patterns/memento">Memento</Link>
      <Link to="/patterns/singleton">Singleton</Link>
      <Link to="/patterns/command">Command</Link>
    </StyledPatterns>
  );
};

export default PatternsList;
