import React from 'react';
import styled from 'styled-components';
import { ICON_TWITTER, ICON_FACEBOOK } from '../static/icons';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  a {
    border: 1px solid ${props => props.theme.buttonBackground};
    border-radius: 50%;
    display: inline-flex;
    margin: 1rem;
    padding: 0.5rem;

    :hover svg,
    :focus svg {
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
    <a
      href="https://twitter.com/intent/tweet?url=https://designpatternsgame.com&text=Test%20your%20familiarity%20with%20the%20Gang%20of%20Four%20design%20patterns%20implemented%20in%20JavaScript"
      target="_blank"
    >
      {ICON_TWITTER}
    </a>
    <a href="https://www.facebook.com/sharer.php?u=https://designpatternsgame.com/" target="_blank">
      {ICON_FACEBOOK}
    </a>
  </FooterContainer>
);

export default Footer;
