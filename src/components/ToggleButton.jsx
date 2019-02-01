/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleJS } from '../actions';

const ToggleButton = props => {
  const toggleJS = () => {
    const { js, toggleJS } = props;
    toggleJS(js === 'es5' ? 'es6' : 'es5');
  };

  return <button onClick={toggleJS}>{props.js}</button>;
};

ToggleButton.propTypes = {
  js: PropTypes.string.isRequired,
};

// const mapStateToProps = state => ({ js: state.js });
const mapStateToProps = ({ js }) => ({ js });

const mapDispatchToProps = dispatch => {
  return { toggleJS: version => dispatch(toggleJS(version)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButton);
