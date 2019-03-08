import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './src/store';
import Layout from './src/Layout';
import ScrollToTop from './src/components/ScrollToTop';

const App = () => (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <Layout />
      </ScrollToTop>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
