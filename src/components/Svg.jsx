import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getMode from '../selectors/getMode';
import { JS, SUN_OUTLINED, SUN_FILLED } from '../data/icons';

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
      fill="#707070"
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

const mapStateToProps = state => ({
  mode: getMode(state)
});

export default connect(mapStateToProps)(SVG);
