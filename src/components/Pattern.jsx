import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import styleLight from '../styles/hljs/hljs.light';
import styleDark from '../styles/hljs/hljs.dark';
import { patterns } from '../static/patterns';
import { restart } from '../actions/restart';
import { getMode } from '../selectors';

SyntaxHighlighter.registerLanguage('javascript', js);

const StyledPattern = styled.div`
  color: ${props => props.theme.text};

  h2,
  h3 {
    color: ${props => props.theme.header};
    margin-top: 2.5rem;
  }
`;

const SubHeader = styled.span`
  background-color: ${props => props.theme.titleBackground};
  color: ${props => props.theme.header};
  display: block;
  margin-bottom: 8px;
  padding: 4px;
  text-transform: uppercase;
`;

const Type = styled.span`
  text-transform: capitalize;
`;

const StyledLink = styled(Link)`
  border-bottom: 1px solid ${props => props.theme.CRIMSON};
  color: ${props => props.theme.CRIMSON};
  display: inline-block;
  margin-top: 2rem;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid transparent;
  }
`;

class Pattern extends React.Component {
  componentDidMount() {
    this.props.reset();
  }

  render() {
    const {
      params: { id }
    } = this.props.match;

    const pattern = patterns.filter(item => item.id === id)[0];

    const style = this.props.mode === 'dark' ? styleDark : styleLight;

    return (
      <StyledPattern>
        <StyledLink to="/patterns">&larr; Back to Patterns List</StyledLink>
        {pattern && (
          <React.Fragment>
            <h2>{pattern.name}</h2>
            <p>
              <SubHeader>Type:</SubHeader>
              <Type>{pattern.type} pattern</Type>
            </p>
            <p>
              <SubHeader>Definition:</SubHeader>
              {pattern.definition}
            </p>
            {pattern.when && (
              <p>
                <SubHeader>Use when&hellip;</SubHeader>
                &hellip;{pattern.when}.
              </p>
            )}

            <h3>ES6</h3>
            <SyntaxHighlighter language="javascript" style={style}>
              {pattern.codeES6}
            </SyntaxHighlighter>

            <h3>ES5</h3>
            <SyntaxHighlighter language="javascript" style={style}>
              {pattern.codeES5}
            </SyntaxHighlighter>
          </React.Fragment>
        )}
      </StyledPattern>
    );
  }
}

Pattern.propTypes = {
  match: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired
};

export default connect(
  state => ({
    mode: getMode(state)
  }),
  {
    reset: () => restart()
  }
)(Pattern);
