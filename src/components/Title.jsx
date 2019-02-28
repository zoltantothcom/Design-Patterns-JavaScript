import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  padding: 1.5rem;
  border-radius: 4px;
  background: ${props => props.theme.headerBackground};
  font-size: 1.75rem;
  color: ${props => props.theme.orange};
  margin: 1rem 0 0;
  text-align: center;
  width: 100%;
`;

export const Title = () => <StyledTitle>JavaScript Design Patterns</StyledTitle>;

export default Title;
