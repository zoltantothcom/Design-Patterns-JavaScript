import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import railscasts from 'react-syntax-highlighter/dist/styles/hljs/railscasts';

SyntaxHighlighter.registerLanguage('javascript', js);

const Title = styled.h1`
  font-family: sans-serif;
  padding: 2em;
  background: papayawhip;
  font-size: 2em;
  text-align: center;
  color: palevioletred;
  margin: 0;
`;

const codeString = `
module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    contentBase: './build'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
      statsFilename: path.join(__dirname, 'stats/stats.json')
    })
  ],
  performance: { hints: false }
};

`;

class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title>JavaScript</Title>
        <SyntaxHighlighter language="javascript" style={railscasts} customStyle={{ fontSize: '1.25rem' }}>
          {codeString}
        </SyntaxHighlighter>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
