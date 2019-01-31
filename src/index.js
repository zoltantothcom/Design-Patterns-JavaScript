import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: sans-serif;
  padding: 2em;
  background: papayawhip;
  font-size: 4em;
  text-align: center;
  color: palevioletred;
  margin: 0;
`;

class Welcome extends React.Component {
  render() {
    return <Title>Hello World</Title>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
