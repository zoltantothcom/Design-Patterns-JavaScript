/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { JS, SUN_OUTLINED, SUN_FILLED } from '../data/icons';

const SVG = ({ control, mode }) => {
  const className = '';
  const fill = '#707070';

  let icon = JS;
  if (control === 'mode' && mode === 'dark') icon = SUN_OUTLINED;
  if (control === 'mode' && mode === 'light') icon = SUN_FILLED;

  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 24 23"
      style={{}}
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {icon}
    </svg>
  );
};

SVG.propTypes = {
  control: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

const mapStateToProps = ({ mode }) => ({ mode });

export default connect(mapStateToProps)(SVG);
