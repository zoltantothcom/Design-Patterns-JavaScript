import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPatterns = styled.div``;

const Header = styled.h3`
  color: ${props => props.theme.buttonColorHover};
  margin-top: 2rem;
`;

// const Patterns = ({ match }) => {
//   const { pattern } = match.params;

const Patterns = props => {
  console.log(props);

  props.history.listen(location => {
    console.log(location);
  });

  const { pattern } = props.match.params;

  return (
    <StyledPatterns>
      <Header>{pattern}</Header>
    </StyledPatterns>
  );
};

Patterns.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Patterns;
