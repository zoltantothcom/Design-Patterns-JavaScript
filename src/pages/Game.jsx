import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { restart } from '../actions/restart';
import { getCurrent } from '../selectors';
import ButtonContainer from '../components/ButtonContainer';
import ProgressBar from '../components/ProgressBar';
import Code from '../components/Code';
import Result from '../components/Result';
import Percentage from '../components/Percentage';
import Button from '../components/Button';

const Restart = styled.div`
  margin: 3rem 4rem;
  text-align: center;
`;

const Game = ({ current, style, onRestart }) => (
  <Fragment>
    {current ? (
      <Fragment>
        <ProgressBar />
        <Code style={style} />
        <ButtonContainer />
      </Fragment>
    ) : (
      <Fragment>
        <Result />
        <Percentage />
        <Restart>
          <Button label="Try Again" id="try_again" onClick={onRestart} />
        </Restart>
        <p>
          <a
            className="twitter-share-button"
            data-size="large"
            data-dnt="true"
            href="https://twitter.com/intent/tweet?text=I%20scored%2021%20out%20of%2023%20JavaScript%20Design%20Patterns!&url=https://javascript-design-patterns.netlify.com"
          >
            Tweet Your Score
          </a>
        </p>
      </Fragment>
    )}
  </Fragment>
);

Game.propTypes = {
  style: PropTypes.object.isRequired,
  onRestart: PropTypes.func.isRequired,
  current: PropTypes.object
};

export default connect(
  state => ({
    current: getCurrent(state)
  }),
  {
    onRestart: () => restart()
  }
)(Game);
