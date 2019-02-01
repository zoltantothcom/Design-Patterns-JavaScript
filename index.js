import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/store';
import Layout from './src/Layout';

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
