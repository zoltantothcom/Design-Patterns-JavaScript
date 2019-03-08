import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    font-family: 'Karla', sans-serif;
    margin: 0;
    padding: 0;
  }

  #root {
    justify-content: start;
    max-width: 640px;
    margin: auto;
    padding: 0 1rem 3rem;

    @media (min-width: 769px) {
      justify-content: space-between;
      padding: 0 0 3rem;
    }
  }

  .fixed {
    height: 375px
  }
`;

export default GlobalStyle;
