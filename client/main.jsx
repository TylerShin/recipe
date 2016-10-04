import { Meteor } from 'meteor/meteor';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { render } from 'react-dom';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import routes
import routes from '../imports/routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

Meteor.startup(() => {
  render(
    <MuiThemeProvider>
      <Router history={browserHistory} children={routes} render={applyRouterMiddleware(useScroll())} />
    </MuiThemeProvider>,
    document.getElementById('app'));
});
