/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { commonTheme as theme } from '../styles/themes/theme.common';

const Container = styled.div`
  display: flex;
  height: 3px;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 100%;
`;

const Step = styled.span`
  background: ${props => (props.nature ? props.theme[props.nature] : props.theme.lightGrey)};
  display: flex;
  height: 3px;
  width: 4%;
`;

export const ProgressBar = props => {
  const { answers, remaining } = props.progress;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {answers.map(pattern => {
          let nature;

          if (pattern.answered) {
            nature = pattern.correct ? 'success' : 'error';
          }

          return <Step key={pattern.uuid || 'qf3f3'} nature={nature} />;
        })}

        {remaining.map(pattern => (
          <Step key={pattern.uuid} />
        ))}
      </Container>
    </ThemeProvider>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.shape({
    answers: PropTypes.array.isRequired,
    remaining: PropTypes.array.isRequired,
  }),
};

const mapStateToProps = ({ progress }) => ({ progress });

export default connect(mapStateToProps)(ProgressBar);
