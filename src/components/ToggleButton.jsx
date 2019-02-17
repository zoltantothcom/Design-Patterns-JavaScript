import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
  height: 2.5rem;
  margin: 0 0 0 1rem;
  outline: 0;
  width: 2.5rem;

  &:hover {
    background-color: #484848;

    & svg,
    & g {
      fill: #ffffff;
    }
  }

  &.active {
    background-color: #e22a23;
    border-color: #e22a23;

    & svg,
    & g {
      fill: #ffffff;
    }
  }

  &.light {
    background-color: #ffffff;
    border-color: #d8d8d8;

    & svg,
    & g {
      fill: #a8a8a8;
    }

    &:hover {
      & svg,
      & g {
        fill: #707070;
      }
    }
  }
`;

const ToggleButton = props => {
  const { toggle, control, js, mode } = props;

  let isActive, isLightMode;
  if (control === 'js' && js === 'es6') isActive = 'active';
  if (control === 'mode' && mode === 'light') isActive = 'active';

  if (!isActive && mode === 'light') isLightMode = 'light';

  return (
    <StyledToggleButton
      onClick={() => toggle(control)}
      className={classnames(isActive, isLightMode)}
    >
      <SVG control={control} />
    </StyledToggleButton>
  );
};

ToggleButton.propTypes = {
  toggle: PropTypes.func.isRequired,
  control: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  js: PropTypes.string.isRequired
};

// const mapStateToProps = state => ({ js: state.js });
const mapStateToProps = ({ js, mode }) => ({ js, mode });

const mapDispatchToProps = dispatch => {
  return { toggle: version => dispatch(toggle(version)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButton);
