import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggle } from '../actions';
import SVG from './Svg';

const StyledToggleButton = styled.button`
  background-color: #2e2e2e;
  border: 1px solid #555555;
  border-radius: 50%;
  color: #999999;
  cursor: pointer;
  height: 3rem;
  margin: 1rem 0 0 1rem;
  width: 3rem;

  &:hover {
    background-color: #484848; /* #fad934 */

    & svg,
    & g {
      fill: #ffffff;
    }
  }
`;

const ToggleButton = props => {
  const { toggle, control } = props;

  return (
    <StyledToggleButton onClick={() => toggle(control)}>
      <SVG control={control} />
    </StyledToggleButton>
  );
};

ToggleButton.propTypes = {
  toggle: PropTypes.func.isRequired,
  control: PropTypes.string.isRequired
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
