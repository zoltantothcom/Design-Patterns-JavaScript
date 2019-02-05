import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.secondaryColor};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
