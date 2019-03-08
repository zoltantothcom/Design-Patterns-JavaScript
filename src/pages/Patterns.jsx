import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PatternsList from '../components/PatternsList';
import Pattern from '../components/Pattern';

const Patterns = () => (
  <Switch>
    <Route path="/patterns" exact component={PatternsList} />
    <Route path="/patterns/:id" component={Pattern} />
  </Switch>
);

export default Patterns;
