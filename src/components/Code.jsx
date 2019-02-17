import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', js);

const Code = props => {
  const { js, current, style } = props;

  return (
    <Fragment>
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
    </Fragment>
  );
};

Code.propTypes = {
  js: PropTypes.string.isRequired,
  current: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
};

const mapStateToProps = ({ js, progress: { current } }) => ({ js, current });

export default connect(mapStateToProps)(Code);
