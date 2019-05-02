import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import { getJS, getPatterns } from '../selectors';

SyntaxHighlighter.registerLanguage('javascript', js);

const Code = ({ uuid, patterns, js, style }) => {
  const current = patterns.find(pattern => pattern.uuid === uuid);

  if (!current) {
    return null;
  }

  return (
    <Fragment>
      {js === 'es5' && (
        <SyntaxHighlighter language="javascript" style={style} className="fixed">
          {current.codeES5}
        </SyntaxHighlighter>
      )}

      {js === 'es6' && (
        <SyntaxHighlighter language="javascript" style={style} className="fixed">
          {current.codeES6}
        </SyntaxHighlighter>
      )}
    </Fragment>
  );
};

Code.propTypes = {
  js: PropTypes.string.isRequired,
  patterns: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
  uuid: PropTypes.string.isRequired
};

export default connect(state => ({
  js: getJS(state),
  patterns: getPatterns(state)
}))(Code);
