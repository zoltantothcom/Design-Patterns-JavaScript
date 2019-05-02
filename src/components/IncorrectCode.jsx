import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import Button from './Button';
import { getJS, getPatterns, getAnswers } from '../selectors';
import { ATLANTIS, CRIMSON } from '../static/constants/colors';

SyntaxHighlighter.registerLanguage('javascript', js);

const StyledButtonContainer = styled.div`
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  height: 9rem;
  justify-content: space-around;
  margin: 1rem 0 2rem;
`;

const Code = ({ answers, uuid, patterns, js, style }) => {
  const currentAnswer = answers.find(pattern => pattern.uuid === uuid);
  const currentPattern = patterns.find(pattern => pattern.uuid === uuid);

  if (!currentAnswer) {
    return null;
  }

  return (
    <Fragment>
      <SyntaxHighlighter language="javascript" style={style} className="fixed">
        {js === 'es5' ? currentPattern.codeES5 : currentPattern.codeES6}
      </SyntaxHighlighter>
      <StyledButtonContainer>
        {currentPattern.variants.map(({ uuid, name }) => {
          // correct answer
          if (uuid === currentAnswer.uuid) {
            return (
              <Button
                id={uuid}
                key={uuid}
                label={name}
                theme={{ buttonBackground: ATLANTIS }}
              />
            );
          }
          // chosen but incorrect answer
          if (uuid === currentAnswer.variantUuid) {
            return (
              <Button
                id={uuid}
                key={uuid}
                label={name}
                theme={{ buttonBackground: CRIMSON }}
              />
            );
          }
          // not chosen, incorrect answers
          return (
            <Button
              id={uuid}
              key={uuid}
              label={name}
            />
          );
        })}
      </StyledButtonContainer>
    </Fragment>
  );
};

Code.propTypes = {
  answers: PropTypes.array.isRequired,
  js: PropTypes.string.isRequired,
  patterns: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
  uuid: PropTypes.string.isRequired
};

export default connect(state => ({
  answers: getAnswers(state),
  js: getJS(state),
  patterns: getPatterns(state)
}))(Code);
