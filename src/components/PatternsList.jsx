import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { patterns } from '../static/patterns';

const StyledPatterns = styled.div`
  color: ${props => props.theme.text};

  a {
    border-bottom: 1px solid transparent;
    color: ${props => props.theme.CRIMSON};
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${props => props.theme.CRIMSON};
    }
  }

  h2,
  h3 {
    color: ${props => props.theme.header};
    margin-top: 2.5rem;
  }
`;

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
      <h2>Design Patterns</h2>

      <p>
        In software engineering, a design pattern is a general repeatable solution to a commonly
        occurring problem in software design.
      </p>

      <h3>Creational Design Patterns</h3>
      <p>
        These design patterns are all about class instantiation. This pattern can be further divided
        into class-creation patterns and object-creational patterns. While class-creation patterns
        use inheritance effectively in the instantiation process, object-creation patterns use
        delegation effectively to get the job done.
      </p>
      {lister('creational')}

      <h3>Structural Design Patterns</h3>
      <p>
        These design patterns are all about Class and Object composition. Structural class-creation
        patterns use inheritance to compose interfaces. Structural object-patterns define ways to
        compose objects to obtain new functionality.
      </p>
      {lister('structural')}

      <h3>Behavioral Design Patterns</h3>
      <p>
        These design patterns are all about Class's objects communication. Behavioral patterns are
        those patterns that are most specifically concerned with communication between objects.
      </p>
      {lister('behavioral')}
    </StyledPatterns>
  );
};

export default PatternsList;
