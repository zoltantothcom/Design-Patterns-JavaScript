import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import ButtonContainer from '../components/ButtonContainer';
import ProgressBar from '../components/ProgressBar';

SyntaxHighlighter.registerLanguage('javascript', js);

const Game = props => {
  const { js, current, style } = props;

  return (
    <Fragment>
      <ProgressBar />
      {js === 'es5' && (
        <SyntaxHighlighter language="javascript" style={style}>
          {current.codeES5}
        </SyntaxHighlighter>
      )}

      {js === 'es6' && (
        <SyntaxHighlighter language="javascript" style={style}>
          {current.codeES6}
        </SyntaxHighlighter>
      )}
      <ButtonContainer />
    </Fragment>
  );
};

Game.propTypes = {
  js: PropTypes.string.isRequired,
  current: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
};

const mapStateToProps = ({ js, progress: { current } }) => ({ js, current });

export default connect(mapStateToProps)(Game);
