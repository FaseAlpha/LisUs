import React from 'react';
import { Route,  IndexRoute } from 'react-router';
import App from './containers/App';
import ListDetailsContainer from './containers/ListDetailsContainer';
import SectionContainer from './containers/SectionContainer';
import GroupsContainer from './containers/GroupsContainer';
import AccountContainer from './containers/AccountContainer';
import FriendsContainer from './containers/FriendsContainer';
import CalendarContainer from './containers/CalendarContainer';

export default (
  <Route path="/" component={App}>
    <Route path="list" component={SectionContainer} />
    <Route path="list/:idList" component={ListDetailsContainer} />
    <Route path="account" component={AccountContainer} />
    <Route path="groups" component={GroupsContainer} />
    <Route path="friends" component={FriendsContainer} />
    <Route path="calendar" component={CalendarContainer} />

    <IndexRoute component={SectionContainer} />
  </Route>
);
