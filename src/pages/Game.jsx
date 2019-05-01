import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { start } from '../actions/start';
import { restart } from '../actions/restart';
import { getIntro, getCurrent, getAnswers } from '../selectors';
import ButtonContainer from '../components/ButtonContainer';
import ProgressBar from '../components/ProgressBar';
import Code from '../components/Code';
import Result from '../components/Result';
import Percentage from '../components/Percentage';
import Button from '../components/Button';

const Intro = styled.div`
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  color: ${props => props.theme.text};
  margin: 2rem 0;
  padding: 2rem 3rem;
`;

const StartButtonContainer = styled.div`
  margin: 3rem auto 1rem;
  /* text-align: center; */
`;

const Restart = styled.div`
  margin: 3rem 0;
  text-align: center;
`;

const TwitterButton = styled.a`
  background: #1da1f2;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 4px;
  margin: 0 8px;
  text-decoration: none;
  font-size: 0.8rem;
`;

const GitHubButton = styled(TwitterButton)`
  background: #e9ecef;
  color: #495057;
`;

const ShareContainer = styled.p`
  text-align: center;
`;

const Game = ({ intro, current, answers, style, onStart, onRestart }) => {
  let correct;

  if (!current) {
    correct = answers.filter(item => item.correct).length;
  }

  return (
    <Fragment>
      {intro && (
        <Intro>
          <p>
            Each question contains a code snippet and four answer choices.
            <br />
            Look carefully at the code and choose the one correct answer.
          </p>
          <p>After answering all 23 questions you'll be shown your results.</p>
          <StartButtonContainer>
            <Button label="Start Game" id="start" onClick={onStart} />
          </StartButtonContainer>
        </Intro>
      )}

      {!intro && current && (
        <Fragment>
          <ProgressBar />
          <Code style={style} />
          <ButtonContainer />
        </Fragment>
      )}

      {!intro && !current && (
        <Fragment>
          <Result />
          <Percentage />
          <Restart>
            <Button label="Try Again" id="try_again" onClick={onRestart} />
          </Restart>
          <ShareContainer>
            <TwitterButton
              className="twitter-share-button"
              data-dnt="true"
              href={`https://twitter.com/intent/tweet?text=I%20scored%20${correct}%20out%20of%2023%20in%20JavaScript%20Design%20Patterns%20game!&url=http://designpatternsgame.com`}
            >
              Tweet Your Score
            </TwitterButton>

            <GitHubButton
              href="https://github.com/zoltantothcom/Design-Patterns-JavaScript"
              aria-label="Star zoltantothcom/Design-Patterns-JavaScript on GitHub"
              target="_blank"
            >
              Star on GitHub
            </GitHubButton>
          </ShareContainer>
        </Fragment>
      )}
    </Fragment>
  );
};

Game.propTypes = {
  style: PropTypes.object.isRequired,
  onStart: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
  intro: PropTypes.bool.isRequired,
  current: PropTypes.object
};

export default connect(
  state => ({
    intro: getIntro(state),
    current: getCurrent(state),
    answers: getAnswers(state)
  }),
  {
    onStart: () => start(),
    onRestart: () => restart()
  }
)(Game);
