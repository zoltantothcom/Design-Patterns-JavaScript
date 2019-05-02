import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import { getJS, getCurrent } from '../selectors';

SyntaxHighlighter.registerLanguage('javascript', js);

export const Code = ({ js, current, style }) => (
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

Code.propTypes = {
  js: PropTypes.string.isRequired,
  current: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
};

export default connect(state => ({
  js: getJS(state),
  current: getCurrent(state)
}))(Code);
