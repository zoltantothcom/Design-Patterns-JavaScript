import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Route, withRouter, Link } from 'react-router-dom';
import Toggle from './Toggle';
import Title from './Title';

const StyledHeader = styled.header`
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
  border-bottom: 1px solid ${props => props.theme.link};
  color: ${props => props.theme.link};
  display: inline-flex;
  font-size: 0.875rem;
  margin: 0.5rem 2rem 0 0;
  padding-bottom: 1px;
  text-decoration: none;
`;

const StyledRouterLink = styled(Link)`
  ${linkStyle}
  &:hover {
    border-bottom: none;
  }
`;

const StyledRouterSpan = styled.span`
  ${linkStyle}
  border-bottom: none;
  color: ${props => props.theme.active};
`;

const Header = props => {
  const {
    location: { pathname }
  } = props;

  const paths = [
    {
      path: '/',
      page: 'Game'
    },
    {
      path: '/about',
      page: 'About'
    }
  ];

  return (
    <StyledHeader>
      <StyledLinkContainer>
        {paths.map(({ path, page }) =>
          pathname === path ? (
            <StyledRouterSpan key={page}>{page}</StyledRouterSpan>
          ) : (
            <StyledRouterLink key={page} to={path}>
              {page}
            </StyledRouterLink>
          )
        )}
      </StyledLinkContainer>

      <StyledSettingsContainer>
        <Route exact path="/" render={() => <Toggle control="js" />} />
        <Toggle control="mode" />
      </StyledSettingsContainer>

      <Title />
    </StyledHeader>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(Header);
