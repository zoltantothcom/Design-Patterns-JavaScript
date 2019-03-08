import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggle } from '../actions/toggle';
import { getJS, getMode } from '../selectors';
import SVG from './Svg';

const StyledToggle = styled.button`
  background-color: ${props => props.theme.toggleBackground};
  border: 1px solid ${props => props.theme.toggleBorder};
  border-radius: 50%;
  cursor: pointer;
  height: 2.5rem;
  margin: 0 0 0 1rem;
  outline: 0;
  width: 2.5rem;

  & svg,
  & g {
    fill: ${props => props.theme.toggleFill};
  }

  &:hover {
    background-color: ${props => props.theme.toggleBackgroundHover};

    & svg,
    & g {
      fill: ${props => props.theme.toggleFillHover};
    }
  }

  &.active {
    background-color: ${props => props.theme.toggleActiveBackground};
    border-color: ${props => props.theme.toggleActiveBorder};

    & svg,
    & g {
      fill: ${props => props.theme.toggleActiveFill};
    }
  }
`;

export const Toggle = props => {
  const { onToggle, control, js, mode } = props;

  let isActive;
  if (control === 'js' && js === 'es6') isActive = 'active';
  if (control === 'mode' && mode === 'light') isActive = 'active';

  return (
    <StyledToggle onClick={() => onToggle(control)} className={isActive}>
      <SVG control={control} />
    </StyledToggle>
  );
};

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  control: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  js: PropTypes.string.isRequired
};

export default connect(
  state => ({
    js: getJS(state),
    mode: getMode(state)
  }),
  {
    onToggle: control => toggle(control)
  }
)(Toggle);
