

import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import ListDetailsContainer from './containers/ListDetailsContainer';
import SectionContainer from './containers/SectionContainer';

export default (
  <Route path="/" component={App}>
    <Route path="list" component={SectionContainer} />
    <Route path="list/:idList" component={ListDetailsContainer} />
    <Redirect path="*" to="/list" />
  </Route>
);
