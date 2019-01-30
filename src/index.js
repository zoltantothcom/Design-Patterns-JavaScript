import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Prism from 'prismjs';
import '../css/prism.css';

const Title = styled.h1`
  font-family: sans-serif;
  padding: 1.5em;
  background: papayawhip;
  font-size: 2em;
  text-align: center;
  color: palevioletred;
  margin: 0;
`;

class Welcome extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <React.Fragment>
        <Title>JavaScript Patterns</Title>

        <pre>
          <code className="language-javascript">
            {`
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook' 
        };
      }
  `}
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
