import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMode } from '../selectors';
import { JS, SUN_OUTLINED, SUN_FILLED } from '../static/icons';

const SVG = ({ control, mode }) => {
  let icon = JS;

  if (control === 'mode') {
    icon = mode === 'dark' ? SUN_OUTLINED : SUN_FILLED;
  }

  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 24 23"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {icon}
    </svg>
  );
};

SVG.propTypes = {
  control: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
};

export default connect(state => ({
  mode: getMode(state)
}))(SVG);
