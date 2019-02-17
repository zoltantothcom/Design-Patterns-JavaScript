import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonContainer from '../components/ButtonContainer';
import ProgressBar from '../components/ProgressBar';
import Code from '../components/Code';
import Results from '../components/Results';

const Game = ({ current, style }) => (
  <Fragment>
    {current ? (
      <Fragment>
        <ProgressBar />
        <Code style={style} />
        <ButtonContainer />
      </Fragment>
    ) : (
      <Results />
    )}
  </Fragment>
);

Game.propTypes = {
  style: PropTypes.object.isRequired,
  current: PropTypes.object
};

const mapStateToProps = ({ progress: { current } }) => ({ current });

export default connect(mapStateToProps)(Game);
