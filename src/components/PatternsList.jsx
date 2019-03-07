import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { patterns } from '../static/patterns';

const StyledPatterns = styled.div``;

const PatternsList = () => {
  return (
    <StyledPatterns>
      <h1>LIST OF PATTERNS</h1>

      <ul>
        {patterns.map(pattern => (
          <li key={pattern.id}>
            <Link to={`/patterns/${pattern.id}`}>{pattern.name}</Link>
          </li>
        ))}
      </ul>
    </StyledPatterns>
  );
};

export default PatternsList;
