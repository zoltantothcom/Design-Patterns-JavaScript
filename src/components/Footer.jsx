import React from 'react';
import styled from 'styled-components';
import { ICON_FACEBOOK } from '../static/icons';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  a {
    border: 1px solid ${props => props.theme.buttonBackground};
    border-radius: 50%;
    display: inline-flex;
    padding: 0.5rem;

    :hover svg,
    :active svg {
      fill: ${props => props.theme.toggleFillHover};
    }
  }

  svg {
    fill: ${props => props.theme.buttonBackground};
    transition: 0.2s;
  }
`;

const Footer = () => (
  <FooterContainer>
    <a href="https://www.facebook.com/sharer.php?u=https://designpatternsgame.com/" target="_blank">
      {ICON_FACEBOOK}
    </a>
  </FooterContainer>
);

export default Footer;
