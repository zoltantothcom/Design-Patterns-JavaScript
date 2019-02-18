import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

const ProviderWrapper = ({ children, store }) => {
  return <Provider store={store}>{children}</Provider>;
};

ProviderWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default ProviderWrapper;
