import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { patterns } from '../static/patterns';

const StyledPatterns = styled.div``;

const PatternsList = () => {
  const lister = patternType => (
    <ul>
      {patterns.map(({ id, name, type }) => {
        if (type === patternType) {
          return (
            <li key={id}>
              <Link to={`/patterns/${id}`}>{name}</Link>
            </li>
          );
        }
      })}
    </ul>
  );

  return (
    <StyledPatterns>
      <h1>DESIGN PATTERNS</h1>

      <p>
        In software engineering, a design pattern is a general repeatable solution to a commonly
        occurring problem in software design.
      </p>

      <h2>Creational Design Patterns</h2>
      <p>
        These design patterns are all about class instantiation. This pattern can be further divided
        into class-creation patterns and object-creational patterns. While class-creation patterns
        use inheritance effectively in the instantiation process, object-creation patterns use
        delegation effectively to get the job done.
      </p>
      {lister('creational')}

      <h2>Structural Design Patterns</h2>
      <p>
        These design patterns are all about Class and Object composition. Structural class-creation
        patterns use inheritance to compose interfaces. Structural object-patterns define ways to
        compose objects to obtain new functionality.
      </p>
      {lister('structural')}

      <h2>Behavioral Design Patterns</h2>
      <p>
        These design patterns are all about Class's objects communication. Behavioral patterns are
        those patterns that are most specifically concerned with communication between objects.
      </p>
      {lister('behavioral')}
    </StyledPatterns>
  );
};

export default PatternsList;
