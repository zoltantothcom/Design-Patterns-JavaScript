import React from 'react';
import styled from 'styled-components';
import withThemeProvider from '../hoc/withThemeProvider';

const StyledTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  padding: 2em;
  background: ${props => props.theme.background};
  font-size: 2em;
  text-align: center;
  color: #e22a23;
  margin: 0;
`;

export const Title = () => <StyledTitle>JavaScript Design Patterns</StyledTitle>;

export default withThemeProvider(Title);
