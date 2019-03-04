import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  color: ${props => props.theme.text};

  a {
    border-bottom: 1px solid ${props => props.theme.CRIMSON};
    color: ${props => props.theme.CRIMSON};
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid transparent;
    }
  }
`;

const Header = styled.h3`
  color: ${props => props.theme.header};
  margin-top: 2rem;
`;

const About = () => (
  <StyledAbout>
    <Header>The Game</Header>
    <p>
      JavaScript Design Patterns - get familiar with the design patterns, test yourself (or someone
      else) or simply for fun. Enjoy!
    </p>

    <Header>References</Header>
    <p>
      All the code samples are taken from this{' '}
      <cite>
        <a href="//github.com/fbeline/Design-Patterns-JS" target="_blank">
          awesome code compilation
        </a>{' '}
        by Felipe Beline
      </cite>
      .
    </p>
    <p>
      If you want a deep dive into the subject I can't recommend enough{' '}
      <cite>
        <a href="//addyosmani.com/resources/essentialjsdesignpatterns/book/" target="_blank">
          Learning JavaScript Design Patterns
        </a>{' '}
        by Addy Osmani
      </cite>
      .
    </p>
  </StyledAbout>
);

export default About;
