import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../src/Layout';

it('renders without crashing', () => {
  shallow(<Layout />);
});
