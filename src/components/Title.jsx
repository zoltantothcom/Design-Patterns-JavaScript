import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  padding: 1.5rem;
  border-radius: 4px;
  background: ${props => props.theme.headerBackground};
  font-size: 1.75rem;
  color: ${props => props.theme.orange};
  margin: 1rem 0 0 -50vw;
  text-align: center;
  left: 50%;
  max-width: 100vw;
  position: relative;
  right: 50%;
  width: 100vw;
`;

export const Title = () => <StyledTitle>JavaScript Design Patterns</StyledTitle>;

export default Title;
