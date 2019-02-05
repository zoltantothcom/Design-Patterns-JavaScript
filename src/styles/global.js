import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  #root {
    max-width: 640px;
    margin: auto;
  }
`;

export default GlobalStyle;
