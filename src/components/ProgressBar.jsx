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
  const { answers } = props.progress;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {answers.map((answer, index) => {
          let nature;

          if (answer.answered) {
            nature = answer.correct ? 'success' : 'error';
          }

          return <Step key={index} nature={nature} />;
        })}
      </Container>
    </ThemeProvider>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.shape({
    answers: PropTypes.array.isRequired
  })
};

ProgressBar.defaultProps = {
  progress: {
    answers: []
  }
};

const mapStateToProps = ({ progress }) => ({ progress });

export default connect(mapStateToProps)(ProgressBar);
