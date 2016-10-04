import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
// import routes
import routes from '../imports/routes';

Meteor.startup(() => {
  render(
    <Router history={browserHistory} children={routes} render={applyRouterMiddleware(useScroll())} />,
    document.getElementById('app'));
});
