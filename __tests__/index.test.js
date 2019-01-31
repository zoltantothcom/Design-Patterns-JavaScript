/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Layout from '../src/Layout';

it('renders without crashing', () => {
  shallow(<Layout />);
});
