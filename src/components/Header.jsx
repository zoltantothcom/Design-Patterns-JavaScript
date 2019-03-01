import React from 'react';
import styled, { css } from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Toggle from './Toggle';
import Title from './Title';

const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 1rem;

  @media (min-width: 769px) {
    justify-content: space-between;
  }
`;

const StyledLinkContainer = styled.div`
  display: inline-flex;
`;

const StyledSettingsContainer = styled.div`
  display: inline-flex;
`;

const linkStyle = css`
  border-bottom: 1px solid transparent;
  color: ${props => props.theme.buttonBackgroundHover};
  display: inline-flex;
  font-size: 0.875rem;
  margin: 0.5rem 2rem 0 0;
  padding-bottom: 1px;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.buttonColor};
    color: ${props => props.theme.buttonColor};
  }
`;

const StyledRouterLink = styled(Link)`
  ${linkStyle}
`;

const Header = () => (
  <StyledHeader>
    <StyledLinkContainer>
      <StyledRouterLink to="/">Game</StyledRouterLink>
      <StyledRouterLink to="/about">About</StyledRouterLink>
    </StyledLinkContainer>

    <StyledSettingsContainer>
      <Route exact path="/" render={() => <Toggle control="js" />} />
      <Toggle control="mode" />
    </StyledSettingsContainer>

    <Title />
  </StyledHeader>
);

export default Header;
