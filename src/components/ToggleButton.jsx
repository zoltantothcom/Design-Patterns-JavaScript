/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggle } from '../actions';

const ToggleButton = props => {
  const { toggle, state, js } = props;

  return <button onClick={() => toggle(state)}>{`Toggle ${state}`}</button>;
};

ToggleButton.propTypes = {
  state: PropTypes.string.isRequired,
};

// const mapStateToProps = state => ({ js: state.js });
const mapStateToProps = ({ js }) => ({ js });

const mapDispatchToProps = dispatch => {
  return { toggle: version => dispatch(toggle(version)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButton);
